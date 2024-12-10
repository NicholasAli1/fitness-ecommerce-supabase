import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase environment variables are missing.");
}

console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", process.env.SUPABASE_ANON_KEY);

// Create a client for the server-side (e.g., SSR or API routes)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// You can add a wrapper for server-side interactions if needed
export function createServerSupabaseClient() {
  return createClient(supabaseUrl, supabaseAnonKey);
}
