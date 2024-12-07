"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const Add = ({
               productId,
               price,
             }: {
  productId: string;
  price: number;
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i") {
      setQuantity((prev) => prev + 1);
    }
  };

  const addItemToCart = async () => {
    setIsLoading(true);
    try {
      // Add item to the cart
      const { error: cartError } = await supabase.from("cart_items").insert([
        {
          product_id: productId,
          quantity,
          total_price: price * quantity,
        },
      ]);

      if (cartError) {
        console.error("Error adding to cart:", cartError.message);
        return;
      }

      alert("Item added to cart successfully!");
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="flex flex-col gap-4">
        <h4 className="font-medium">Choose a Quantity</h4>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
              <button
                  className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
                  onClick={() => handleQuantity("d")}
                  disabled={quantity === 1}
              >
                -
              </button>
              {quantity}
              <button
                  className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
                  onClick={() => handleQuantity("i")}
              >
                +
              </button>
            </div>
          </div>
          <button
              onClick={addItemToCart}
              disabled={isLoading}
              className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white"
          >
            {isLoading ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
  );
};

export default Add;
