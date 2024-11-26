import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  // Check if categoryId is defined
  if (!categoryId) {
    console.error("Category ID is undefined.");
    return <div>Error: Category ID is missing.</div>;
  }

  // Build the query filters for Supabase
  const queryFilters: any = {
    categoryid: categoryId, // Ensure you're using the correct column name (categoryid)
    name: searchParams?.name || "", // Filtering by name
    price: {
      from: searchParams?.min || 0,
      to: searchParams?.max || 999999,
    },
  };

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("categoryid", categoryId) // Use categoryid for the column name
    .ilike("name", `%${searchParams?.name || ""}%`) // Search name like
    .gte("price", queryFilters.price.from)
    .lte("price", queryFilters.price.to)
    .order("createdat", { ascending: false })
    .range(
      (searchParams?.page - 1) * (limit || PRODUCT_PER_PAGE),
      searchParams?.page * (limit || PRODUCT_PER_PAGE) - 1
    );

  if (error) {
    console.error("Error fetching products:", error.message);
    return <div>Error loading products</div>;
  }

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.map((product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product.id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.mainImageUrl || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.additionalImages &&
              product.additionalImages.length > 0 && (
                <Image
                  src={product.additionalImages[1] || "/product.png"}
                  alt=""
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md"
                />
              )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price}</span>
          </div>
          {product.shortDesc && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.shortDesc),
              }}
            ></div>
          )}
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
      {products.length > 0 && (
        <Pagination
          currentPage={searchParams?.page || 1}
          hasPrev={searchParams?.page > 1}
          hasNext={products.length === (limit || PRODUCT_PER_PAGE)}
        />
      )}
    </div>
  );
};

export default ProductList;
