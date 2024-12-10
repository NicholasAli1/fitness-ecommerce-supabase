"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { cart, counter } = useCartStore();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Demo checkout - just redirect to success
    router.push("/success");
  };

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <h1 className="text-3xl font-bold mb-4">Checkout (Demo)</h1>
      {counter === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <p>
                  {item.title} x {item.quantity}
                </p>
                <p>${item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="font-bold">Total:</p>
            <p className="font-bold">${total}</p>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-red-500 text-white p-3 rounded-md w-full mt-4"
          >
            Complete Demo Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
