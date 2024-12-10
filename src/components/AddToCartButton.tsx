"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { useState } from "react";

const AddToCartButton = ({ product }: { product: any }) => {
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      img: product.img,
      price: product.price,
      quantity: quantity,
    });
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          className="w-8 h-8 border rounded-full flex items-center justify-center"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="w-8 h-8 border rounded-full flex items-center justify-center"
        >
          +
        </button>
      </div>
      <button
        className="uppercase bg-red-500 text-white p-3 rounded-md"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
