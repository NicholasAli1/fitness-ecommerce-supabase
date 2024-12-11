import { supabase } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

const ProductList = async ({
  page = 1,
  cat,
  categoryId,
  limit,
  searchParams,
}: {
  page?: number;
  cat?: string;
  categoryId?: number;
  limit?: number;
  searchParams?: any;
}) => {
  let query = supabase.from("products").select("*", { count: "exact" });

  // Handle search query
  if (searchParams?.name) {
    const searchTerm = searchParams.name.trim().toLowerCase();
    query = query.or(
      `name.ilike.%${searchTerm}%,shortdesc.ilike.%${searchTerm}%`
    );
  }

  // Handle category filtering
  if (cat) {
    query = query.eq("slug", cat);
  } else if (categoryId) {
    query = query.eq("categoryid", categoryId);
  }

  // Apply limit if specified
  if (limit) {
    query = query.limit(limit);
  } else {
    query = query.range(
      (page - 1) * PRODUCT_PER_PAGE,
      page * PRODUCT_PER_PAGE - 1
    );
  }

  const {
    data: products,
    count,
    error,
  } = await query.order("createdat", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    return <div>Error loading products</div>;
  }

  const pageCount = Math.ceil((count || 0) / PRODUCT_PER_PAGE);

  return (
    <div className="flex flex-wrap text-red-500">
      {products?.map((item) => (
        <Link
          className="w-full h-[60vh] sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-white my-7"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.mainimageurl && (
            <div className="relative h-[80%]">
              <Image
                src={item.mainimageurl}
                alt={item.name || ""}
                fill
                className="object-contain"
              />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.name}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
          <div
            className="p-2 text-sm"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.desc || ""),
            }}
          />
        </Link>
      ))}
      {!limit && pageCount > 1 && <Pagination pageCount={pageCount} />}
    </div>
  );
};

export default ProductList;
