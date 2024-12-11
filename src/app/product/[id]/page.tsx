import { supabase } from "@/utils/supabase/client";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {product.mainimageurl && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image src={product.mainimageurl} alt={product.name} fill className="object-contain" />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {product.name}
        </h1>
        <p>{product.shortdesc}</p>
        <p className="text-2xl font-bold">${product.price}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default SingleProductPage;
