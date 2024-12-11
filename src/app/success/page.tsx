"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCartStore } from "@/hooks/useCartStore";

const SuccessPage = () => {
  const router = useRouter();
  const { cart } = useCartStore();

  useEffect(() => {
    // Clear cart after 5 seconds and redirect to home
    const timer = setTimeout(() => {
      useCartStore.setState({ cart: [], counter: 0 });
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-bold">Order Successful!</h2>
        <p>Redirecting to homepage...</p>
      </div>
    </div>
  );
};

export default SuccessPage;
