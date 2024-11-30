import { createServerClientForServer } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { format } from "timeago.js";
import UpdateButton from "@/components/UpdateButton";
import Link from "next/link";

const ProfilePage = async () => {
  const supabase = createServerClientForServer(); // Get server-side client

  // Get the user session
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError || !session) {
    return <div>Not logged in!</div>;
  }

  const userId = session.user.id;

  // Fetch user details from the 'users' table
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("id, username, first_name, last_name, phone, email")
    .eq("id", userId)
    .single();

  if (userError || !user) {
    return <div>Error fetching user data!</div>;
  }

  // Fetch orders for the user from the 'orders' table
  const { data: orders, error: ordersError } = await supabase
    .from("orders")
    .select("id, price_summary, created_at, status")
    .eq("user_id", userId);

  if (ordersError) {
    return <div>Error fetching orders!</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Profile Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl">Profile</h1>
        <form
          action="/api/updateUser"
          method="POST"
          className="mt-12 flex flex-col gap-4"
        >
          <input type="hidden" name="id" value={user.id} />
          <label className="text-sm text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            defaultValue={user.username || "john"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">First Name</label>
          <input
            type="text"
            name="first_name"
            defaultValue={user.first_name || "John"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Surname</label>
          <input
            type="text"
            name="last_name"
            defaultValue={user.last_name || "Doe"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            defaultValue={user.phone || "+1234567"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            defaultValue={user.email || "john@gmail.com"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <UpdateButton />
        </form>
      </div>

      {/* Orders Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl">Orders</h1>
        <div className="mt-12 flex flex-col">
          {orders.map((order) => (
            <Link
              href={`/orders/${order.id}`}
              key={order.id}
              className="flex justify-between px-2 py-6 rounded-md hover:bg-green-50 even:bg-slate-100"
            >
              <span className="w-1/4">{order.id.substring(0, 10)}...</span>
              <span className="w-1/4">
                ${order.price_summary?.subtotal?.amount || "0.00"}
              </span>
              <span className="w-1/4">{format(order.created_at)}</span>
              <span className="w-1/4">{order.status}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
