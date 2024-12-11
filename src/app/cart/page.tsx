import CartItems from "@/components/CartItems";

const CartPage = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] p-4 lg:px-20 xl:px-40">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      <CartItems />
    </div>
  );
};

export default CartPage; 