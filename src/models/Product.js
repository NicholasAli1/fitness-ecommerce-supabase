import supabase from "../lib/dbConnect";

// Fetching products
export async function getProducts() {
  const { data, error } = await supabase
    .from("products") // Table name in Supabase
    .select("*"); // Adjust fields based on your schema

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
