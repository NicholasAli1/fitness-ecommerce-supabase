import { supabase } from "@/lib/supabaseClient"; // Assuming you're using supabase client here
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  // Fetch all categories from Supabase
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    console.error("Error fetching categories:", error.message);
    return <div>Error loading categories</div>;
  }

  if (!categories || categories.length === 0) {
    console.error("No categories found.");
    return <div>No categories available.</div>;
  }

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={item.id} // Use item.id if it's the primary key
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src={item.media?.mainMedia?.image?.url || "/cat.png"}
                alt={item.name || "Category"}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
