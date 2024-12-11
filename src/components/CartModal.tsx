"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { useRouter } from "next/navigation";

const CartModal = () => {
  const { cart, removeItem } = useCartStore();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="p-4 h-[calc(100vh-6rem)]">
      <h2 className="text-2xl mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <h3>{item.name}</h3>
                <p>
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <div className="flex justify-between mb-4">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-red-500 text-white p-3 rounded-md"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
