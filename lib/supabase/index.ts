/**
 * Supabase module barrel export
 *
 * Usage:
 *  - In Server Components / Route Handlers / Server Actions:
 *      import { createClient } from "@/lib/supabase/server"
 *
 *  - In Client Components:
 *      import { createClient } from "@/lib/supabase/client"
 *
 *  - Type helpers:
 *      import type { Tables, InsertDto, UpdateDto } from "@/lib/supabase"
 */
export type { Database, Tables, InsertDto, UpdateDto } from "./types";
