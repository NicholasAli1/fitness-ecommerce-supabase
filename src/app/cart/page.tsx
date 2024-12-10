import CartItems from "@/components/CartItems";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      <CartItems />
    </div>
  );
};

export default CartPage; 