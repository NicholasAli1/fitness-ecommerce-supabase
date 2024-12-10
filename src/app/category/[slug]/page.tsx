import { supabase } from "@/utils/supabase/client";
import ProductList from "@/components/ProductList";
import { notFound } from "next/navigation";

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const { data: category, error } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", params.slug)
    .eq("imageUrl", true)
    .single();

  if (error || !category) {
    console.error("Error fetching category:", error);
    return notFound();
  }

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
      <ProductList cat={params.slug} />
    </div>
  );
};

export default CategoryPage;
