import { createClient } from "@supabase/supabase-js";

// Load environment variables (ensure these are in your .env file)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
