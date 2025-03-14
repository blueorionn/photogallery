import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

export const supabaseDbClient = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PRIVATE_SUPABASE_SERVICE_ROLE!
);
