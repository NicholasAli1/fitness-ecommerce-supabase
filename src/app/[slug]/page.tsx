"use client";
import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";
import Add from "@/components/Add";

const SinglePage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) return; // Ensure slug is available before fetching

      try {
        const { data: productData, error } = await supabase
          .from("products")
          .select(
            `
            id, 
            name, 
            slug, 
            categoryid, 
            price, 
            shortdesc, 
            mainimageurl, 
            additionalimages, 
            producttype, 
            createdat
            `
          )
          .eq("slug", slug)
          .single();

        if (error || !productData) {
          setError("Product not found");
          return;
        }

        setProduct(productData);
      } catch (err) {
        setError("Error fetching product data.");
      } finally {
        setLoading(false);
      }
    };

    // Unwrap the params to get the slug
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };

    unwrapParams().then(fetchProduct);
  }, [params]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <img
          src={product.mainimageurl}
          alt={product.name}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.shortdesc}</p>
        <div className="h-[2px] bg-gray-100" />
        <h2 className="font-medium text-2xl">${product.price}</h2>
        <div className="h-[2px] bg-gray-100" />

        {/* Add to Cart Button */}
        <div className="flex items-center gap-4">
          <Add productId={product.id} price={product.price} />
        </div>
        <div className="h-[2px] bg-gray-100" />

        {/* Additional Images */}
        {product.additionalimages && (
          <div className="grid grid-cols-2 gap-4">
            {product.additionalimages
              .split(",")
              .map((imgUrl: string, index: number) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Additional image ${index + 1}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePage;
