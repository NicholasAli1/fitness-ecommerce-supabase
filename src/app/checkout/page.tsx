"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { cart, counter } = useCartStore();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    router.push("/success");
  };

  return (
    <div className="p-4 lg:px-20 xl:px-40 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Checkout</h1>
      {counter === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Your cart is empty</p>
          <button 
            onClick={() => router.push("/")}
            className="mt-4 text-red-500 hover:text-red-600"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-4 border-b">
                <div className="flex flex-col">
                  <p className="text-lg font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-4 border-t">
            <div className="flex justify-between items-center mb-8">
              <p className="text-xl font-bold text-gray-800">Total:</p>
              <p className="text-xl font-bold text-gray-800">${total.toFixed(2)}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-red-500 text-white py-4 px-6 rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              Complete Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
