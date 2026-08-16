-- ============================================================
-- HimFlora / ArtCommerce – Supabase Schema
-- Run this in the Supabase SQL Editor (Project > SQL Editor)
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ─────────────────────────────────────────────
-- ENUMS
-- ─────────────────────────────────────────────

create type order_status   as enum ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled');
create type payment_status as enum ('pending', 'paid', 'failed', 'refunded');
create type product_type   as enum ('artwork', 'shop_product');
create type user_role      as enum ('customer', 'admin');
create type shipping_status_type as enum ('Made To Order', 'Ready to Ship');
create type discount_type  as enum ('percentage', 'fixed');

-- ─────────────────────────────────────────────
-- PROFILES  (extends auth.users)
-- ─────────────────────────────────────────────

create table profiles (
  id                        uuid primary key references auth.users on delete cascade,
  created_at                timestamptz not null default now(),
  updated_at                timestamptz not null default now(),
  full_name                 text,
  email                     text,
  phone                     text,
  avatar_url                text,
  default_shipping_address  jsonb,
  role                      user_role not null default 'customer'
);

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- ─────────────────────────────────────────────
-- CATEGORIES
-- ─────────────────────────────────────────────

create table categories (
  id          uuid primary key default uuid_generate_v4(),
  created_at  timestamptz not null default now(),
  name        text not null,
  slug        text not null unique,
  description text,
  image_url   text,
  parent_id   uuid references categories(id) on delete set null,
  sort_order  integer not null default 0
);

-- Seed categories from existing data
insert into categories (name, slug, sort_order) values
  ('Place Mats',              'place-mats',             1),
  ('Potholders & Oven Mitts', 'potholders-oven-mitts',  2),
  ('Dish Cloths & Towels',    'dish-cloths-towels',     3),
  ('Table Napkins',           'table-napkins',          4),
  ('Kitchen Utilities',       'kitchen-utilities',      5),
  ('Table Mats',              'table-mats',             6),
  ('Copper Bottle',           'copper-bottle',          7),
  ('Water Bottle',            'water-bottle',           8),
  ('Hanging Florals',         'hanging-florals',        9),
  ('Botanical',               'botanical',              10);

-- ─────────────────────────────────────────────
-- PRODUCTS
-- ─────────────────────────────────────────────

create table products (
  id               uuid primary key default uuid_generate_v4(),
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  title            text not null,
  description      text,
  price            numeric(10,2) not null check (price >= 0),
  original_price   numeric(10,2) check (original_price >= 0),
  discount_percent numeric(5,2)  check (discount_percent between 0 and 100),
  category         text not null,
  image_url        text not null,
  images           text[] not null default '{}',
  badge            text,
  is_new           boolean not null default false,
  rating           numeric(3,2)  check (rating between 0 and 5),
  review_count     integer not null default 0,
  stock_quantity   integer not null default 0,
  is_active        boolean not null default true,
  artist           text,
  dimensions       text,
  shipping_status  shipping_status_type,
  sizes            text[] not null default '{}',
  slug             text not null unique,
  type             product_type not null default 'shop_product'
);

-- Updated-at trigger
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger products_updated_at
  before update on products
  for each row execute procedure set_updated_at();

-- ─────────────────────────────────────────────
-- ORDERS
-- ─────────────────────────────────────────────

create table orders (
  id                   uuid primary key default uuid_generate_v4(),
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now(),
  user_id              uuid references profiles(id) on delete set null,
  status               order_status not null default 'pending',
  payment_status       payment_status not null default 'pending',
  payment_method       text,
  subtotal             numeric(10,2) not null,
  shipping_amount      numeric(10,2) not null default 0,
  discount_amount      numeric(10,2) not null default 0,
  total_amount         numeric(10,2) not null,
  currency             text not null default 'INR',
  shipping_address     jsonb not null,
  billing_address      jsonb,
  notes                text,
  razorpay_order_id    text,
  razorpay_payment_id  text,
  -- Guest checkout support
  guest_email          text,
  guest_name           text,
  guest_phone          text
);

create trigger orders_updated_at
  before update on orders
  for each row execute procedure set_updated_at();

-- ─────────────────────────────────────────────
-- ORDER ITEMS
-- ─────────────────────────────────────────────

create table order_items (
  id               uuid primary key default uuid_generate_v4(),
  created_at       timestamptz not null default now(),
  order_id         uuid not null references orders(id) on delete cascade,
  product_id       uuid not null references products(id) on delete restrict,
  quantity         integer not null check (quantity > 0),
  unit_price       numeric(10,2) not null,
  total_price      numeric(10,2) not null,
  size             text,
  product_snapshot jsonb not null  -- snapshot at time of purchase
);

-- ─────────────────────────────────────────────
-- REVIEWS
-- ─────────────────────────────────────────────

create table reviews (
  id                   uuid primary key default uuid_generate_v4(),
  created_at           timestamptz not null default now(),
  product_id           uuid not null references products(id) on delete cascade,
  user_id              uuid references profiles(id) on delete set null,
  rating               integer not null check (rating between 1 and 5),
  title                text,
  body                 text,
  is_verified_purchase boolean not null default false,
  is_published         boolean not null default false,
  reviewer_name        text
);

-- Auto-update product rating/review_count after review change
create or replace function update_product_rating()
returns trigger language plpgsql as $$
begin
  update products
  set
    rating       = (select round(avg(rating)::numeric, 2) from reviews where product_id = coalesce(new.product_id, old.product_id) and is_published = true),
    review_count = (select count(*) from reviews where product_id = coalesce(new.product_id, old.product_id) and is_published = true)
  where id = coalesce(new.product_id, old.product_id);
  return coalesce(new, old);
end;
$$;

create trigger reviews_after_change
  after insert or update or delete on reviews
  for each row execute procedure update_product_rating();

-- ─────────────────────────────────────────────
-- WISHLIST
-- ─────────────────────────────────────────────

create table wishlist (
  id          uuid primary key default uuid_generate_v4(),
  created_at  timestamptz not null default now(),
  user_id     uuid not null references profiles(id) on delete cascade,
  product_id  uuid not null references products(id) on delete cascade,
  unique (user_id, product_id)
);

-- ─────────────────────────────────────────────
-- COUPONS
-- ─────────────────────────────────────────────

create table coupons (
  id                   uuid primary key default uuid_generate_v4(),
  created_at           timestamptz not null default now(),
  code                 text not null unique,
  discount_type        discount_type not null,
  discount_value       numeric(10,2) not null check (discount_value > 0),
  minimum_order_value  numeric(10,2),
  max_uses             integer,
  current_uses         integer not null default 0,
  valid_from           timestamptz,
  valid_until          timestamptz,
  is_active            boolean not null default true
);

-- ─────────────────────────────────────────────
-- ROW LEVEL SECURITY (RLS)
-- ─────────────────────────────────────────────

alter table profiles   enable row level security;
alter table products   enable row level security;
alter table categories enable row level security;
alter table orders     enable row level security;
alter table order_items enable row level security;
alter table reviews    enable row level security;
alter table wishlist   enable row level security;
alter table coupons    enable row level security;

-- Helper: check if current user is admin
create or replace function is_admin()
returns boolean language sql security definer as $$
  select exists (
    select 1 from profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- profiles: users can only read/update their own row; admins see all
create policy "profiles: own read"   on profiles for select using (auth.uid() = id or is_admin());
create policy "profiles: own update" on profiles for update using (auth.uid() = id);
create policy "profiles: admin all"  on profiles for all    using (is_admin());

-- products: public read, admin write
create policy "products: public read"  on products for select using (is_active = true);
create policy "products: admin write"  on products for all    using (is_admin());

-- categories: public read, admin write
create policy "categories: public read" on categories for select using (true);
create policy "categories: admin write" on categories for all    using (is_admin());

-- orders: users see their own; admins see all
create policy "orders: own read"   on orders for select using (auth.uid() = user_id or is_admin());
create policy "orders: own insert" on orders for insert with check (auth.uid() = user_id or user_id is null);
create policy "orders: admin all"  on orders for all    using (is_admin());

-- order_items: follow the parent order
create policy "order_items: read via order" on order_items for select
  using (exists (select 1 from orders where orders.id = order_items.order_id and (orders.user_id = auth.uid() or is_admin())));
create policy "order_items: insert via order" on order_items for insert
  with check (exists (select 1 from orders where orders.id = order_items.order_id and (orders.user_id = auth.uid() or user_id is null or is_admin())));

-- reviews: published reviews are public; own draft readable; admin all
create policy "reviews: public read"  on reviews for select using (is_published = true or auth.uid() = user_id or is_admin());
create policy "reviews: own insert"   on reviews for insert with check (auth.uid() = user_id);
create policy "reviews: own update"   on reviews for update using (auth.uid() = user_id);
create policy "reviews: admin all"    on reviews for all    using (is_admin());

-- wishlist: own only
create policy "wishlist: own"  on wishlist for all using (auth.uid() = user_id);

-- coupons: active coupons public read; admin write
create policy "coupons: public read" on coupons for select using (is_active = true);
create policy "coupons: admin write" on coupons for all    using (is_admin());

-- ─────────────────────────────────────────────
-- INDEXES
-- ─────────────────────────────────────────────

create index on products (category);
create index on products (type);
create index on products (is_active);
create index on products (slug);
create index on orders   (user_id);
create index on orders   (status);
create index on order_items (order_id);
create index on order_items (product_id);
create index on reviews  (product_id);
create index on wishlist (user_id);
create index on coupons  (code);
