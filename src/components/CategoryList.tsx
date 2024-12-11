import { supabase } from "@/utils/supabase/client";
import Link from "next/link";
import Image from "next/image";

const CategoryList = async () => {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*")
    .order("id");

  if (error) {
    console.error("Error fetching categories:", error);
    return <div>Error loading categories</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {categories?.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
          className="w-full sm:w-1/3 lg:w-1/4 p-4 flex flex-col items-center group hover:bg-fuchsia-50 transition-all"
        >
          <div className="relative h-[200px] w-[200px] bg-gray-100 rounded-lg">
            {category.imageUrl && (
              <Image
                src={category.imageUrl}
                alt={category.name}
                fill
                className="object-contain p-4"
              />
            )}
          </div>
          <h2 className="text-xl font-bold uppercase mt-4">{category.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
