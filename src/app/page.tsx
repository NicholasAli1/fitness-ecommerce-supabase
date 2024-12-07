// pages/index.js
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import { supabase } from "@/lib/supabaseClient";
import { Suspense } from "react";
import CategoryList from "@/components/CategoryList";

const HomePage = async () => {
  // Fetch the featured and new product categories from Supabase
  const { data: featuredCategory, error: featuredError } = await supabase
    .from("categories")
    .select("*")
    .eq("id", process.env.FEATURED_PRODUCTS_FEATURED_CATEGORY_ID || 1)
    .single();

  const { data: newCategory, error: newError } = await supabase
    .from("categories")
    .select("*")
    .eq("id", process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID || 2)
    .single();

  if (featuredError || newError) {
    console.error("Error fetching categories:", featuredError || newError);
    // You can handle errors here if needed
  }

  return (
    <div>
      <Slider />
      {/* Featured Products */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={featuredCategory ? featuredCategory.id : 1}
            limit={4}
          />
        </Suspense>
      </div>
      {/* Categories */}
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>
      {/* New Products */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={newCategory ? newCategory.id : 2}
            limit={4}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
