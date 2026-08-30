export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

// ---------------------------------------------------------------------------
// Database type generated to match the Supabase schema below
// ---------------------------------------------------------------------------

export type Database = {
  public: {
    Tables: {
      // ── Products ──────────────────────────────────────────────────────────
      products: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          title: string;
          description: string | null;
          price: number;
          original_price: number | null;
          discount_percent: number | null;
          category: string;
          image_url: string;
          images: string[];
          badge: string | null;
          is_new: boolean;
          rating: number | null;
          review_count: number;
          stock_quantity: number;
          is_active: boolean;
          artist: string | null;
          dimensions: string | null;
          shipping_status: "Made To Order" | "Ready to Ship" | null;
          sizes: string[];
          size_pricing: Json | null;
          slug: string;
          type: "artwork" | "shop_product";
          sequence: number | null;
        };
        Insert: Omit<
          Database["public"]["Tables"]["products"]["Row"],
          "id" | "created_at" | "updated_at"
        >;
        Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
      };

      // ── Categories ────────────────────────────────────────────────────────
      categories: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          slug: string;
          description: string | null;
          image_url: string | null;
          parent_id: string | null;
          sort_order: number;
        };
        Insert: Omit<
          Database["public"]["Tables"]["categories"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<Database["public"]["Tables"]["categories"]["Insert"]>;
      };

      // ── Orders ────────────────────────────────────────────────────────────
      orders: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          user_id: string | null;
          status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
          payment_status: "pending" | "paid" | "failed" | "refunded";
          payment_method: string | null;
          subtotal: number;
          shipping_amount: number;
          discount_amount: number;
          total_amount: number;
          currency: string;
          shipping_address: Json;
          billing_address: Json | null;
          notes: string | null;
          razorpay_order_id: string | null;
          razorpay_payment_id: string | null;
          guest_email: string | null;
          guest_name: string | null;
          guest_phone: string | null;
        };
        Insert: Omit<
          Database["public"]["Tables"]["orders"]["Row"],
          "id" | "created_at" | "updated_at"
        >;
        Update: Partial<Database["public"]["Tables"]["orders"]["Insert"]>;
      };

      // ── Order Items ───────────────────────────────────────────────────────
      order_items: {
        Row: {
          id: string;
          created_at: string;
          order_id: string;
          product_id: string;
          quantity: number;
          unit_price: number;
          total_price: number;
          size: string | null;
          product_snapshot: Json;
        };
        Insert: Omit<
          Database["public"]["Tables"]["order_items"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<Database["public"]["Tables"]["order_items"]["Insert"]>;
      };

      // ── Profiles ──────────────────────────────────────────────────────────
      profiles: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          full_name: string | null;
          email: string | null;
          phone: string | null;
          avatar_url: string | null;
          default_shipping_address: Json | null;
          role: "customer" | "admin";
        };
        Insert: Omit<
          Database["public"]["Tables"]["profiles"]["Row"],
          "created_at" | "updated_at"
        >;
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };

      // ── Reviews ───────────────────────────────────────────────────────────
      reviews: {
        Row: {
          id: string;
          created_at: string;
          product_id: string;
          user_id: string | null;
          rating: number;
          title: string | null;
          body: string | null;
          is_verified_purchase: boolean;
          is_published: boolean;
          reviewer_name: string | null;
        };
        Insert: Omit<
          Database["public"]["Tables"]["reviews"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<Database["public"]["Tables"]["reviews"]["Insert"]>;
      };

      // ── Wishlist ──────────────────────────────────────────────────────────
      wishlist: {
        Row: {
          id: string;
          created_at: string;
          user_id: string;
          product_id: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["wishlist"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<Database["public"]["Tables"]["wishlist"]["Insert"]>;
      };

      // ── Coupons ───────────────────────────────────────────────────────────
      coupons: {
        Row: {
          id: string;
          created_at: string;
          code: string;
          discount_type: "percentage" | "fixed";
          discount_value: number;
          minimum_order_value: number | null;
          max_uses: number | null;
          current_uses: number;
          valid_from: string | null;
          valid_until: string | null;
          is_active: boolean;
        };
        Insert: Omit<
          Database["public"]["Tables"]["coupons"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<Database["public"]["Tables"]["coupons"]["Insert"]>;
      };
    };

    Views: {
      [_ in never]: never;
    };

    Functions: {
      [_ in never]: never;
    };

    Enums: {
      order_status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
      payment_status: "pending" | "paid" | "failed" | "refunded";
      product_type: "artwork" | "shop_product";
      user_role: "customer" | "admin";
    };
  };
};

// Convenience re-export helpers
export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
export type InsertDto<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];
export type UpdateDto<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];
