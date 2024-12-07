import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import Image from "next/image";
import { Suspense } from "react";
import { supabase } from "@/lib/supabaseClient";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
    // Await searchParams to ensure it resolves
    const resolvedSearchParams = await searchParams;
    const categoryIdParam = resolvedSearchParams.cat;

    // Validate categoryId to ensure it's a valid integer, otherwise default to 1
    const categoryId = categoryIdParam && !isNaN(Number(categoryIdParam)) && Number(categoryIdParam) > 0
        ? parseInt(categoryIdParam, 10)
        : 1; // Default to 1 if invalid

    // Fetch category data from Supabase using the validated category ID
    const { data: category, error } = await supabase
        .from("categories")
        .select("*")
        .eq("id", categoryId)  // Query by the ID of the category
        .single();

    // Handle errors or missing category
    if (error || !category) {
        console.error("Error fetching category:", error || "Category not found");
        return (
            <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <h1 className="text-2xl font-semibold text-gray-700">All Products</h1>
                <p className="text-gray-500">Showing all products as the requested category was not found.</p>
                <Filter />
                <Suspense fallback={<Skeleton />}>
                    <ProductList categoryId={1} searchParams={resolvedSearchParams} />
                </Suspense>
            </div>
        );
    }

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            {/* CAMPAIGN */}
            <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
                <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                    <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
                        Grab up to 50% off on
                        <br /> Selected Products
                    </h1>
                    <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
                        Buy Now
                    </button>
                </div>
                <div className="relative w-1/3">
                    <Image src="/cat.png" alt="" fill className="object-contain" />
                </div>
            </div>
            {/* FILTER */}
            <Filter />
            {/* PRODUCTS */}
            <h1 className="mt-12 text-xl font-semibold">{category?.name} For You!</h1>
            <Suspense fallback={<Skeleton />}>
                <ProductList
                    categoryId={category?.id || 1}  // Ensure that categoryId is a valid number
                    searchParams={resolvedSearchParams}
                />
            </Suspense>
        </div>
    );
};

export default ListPage;
