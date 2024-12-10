"use client";
import { useCartStore } from "@/hooks/useCartStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const { cart, removeItem } = useCartStore();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row text-red-500 lg:px-20 xl:px-40">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-4 xl:px-8 overflow-scroll">
        {cart.map((item) => (
          <div className="flex items-center justify-between mb-4" key={item.id}>
            {item.img && (
              <Image src={item.img} alt="" width={100} height={100} />
            )}
            <div className="">
              <h1 className="uppercase text-xl font-bold">{item.title}</h1>
              <span>Quantity: {item.quantity}</span>
            </div>
            <h2 className="font-bold">${item.price * item.quantity}</h2>
            <button
              className="bg-red-500 text-white p-2 rounded-md"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/3 2xl:w-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center">
        <div className="flex justify-between">
          <span className="">Subtotal ({cart.length} items)</span>
          <span className="">${total}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL</span>
          <span className="font-bold">${total}</span>
        </div>
        <button
          className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end"
          onClick={() => router.push("/checkout")}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartItems;