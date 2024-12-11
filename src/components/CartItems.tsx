"use client";
import { useCartStore } from "@/hooks/useCartStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const { cart, removeItem } = useCartStore();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">Your cart is empty</p>
        <button 
          onClick={() => router.push("/")}
          className="mt-4 text-red-500 hover:text-red-600"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* PRODUCTS CONTAINER */}
      <div className="lg:w-2/3">
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 py-4 border-b last:border-0">
              {item.mainimageurl && (
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image 
                    src={item.mainimageurl} 
                    alt={item.name} 
                    fill 
                    className="object-cover rounded-md"
                  />
                </div>
              )}
              <div className="flex-grow">
                <h2 className="text-lg font-medium text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-lg font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="px-4 py-2 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SUMMARY CONTAINER */}
      <div className="lg:w-1/3">
        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal ({cart.length} items)</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="text-green-500">Free</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-semibold">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => router.push("/checkout")}
            className="w-full mt-6 bg-red-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
