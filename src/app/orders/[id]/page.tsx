import { createServerSupabaseClient } from "@/lib/supabaseClient";
import Link from "next/link";
import { notFound } from "next/navigation";

const OrderPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const supabase = createServerSupabaseClient();

  const { data: order, error } = await supabase
    .from("orders")
    .select(
      `
      id,
      billingInfo:billing_info (
        contactDetails:contact_details (
          firstName:first_name,
          lastName:last_name
        ),
        address (
          addressLine1:address_line_1,
          city
        )
      ),
      buyerInfo:buyer_info (
        email
      ),
      priceSummary:price_summary (
        subtotal
      ),
      paymentStatus:payment_status,
      status
      `
    )
    .eq("id", id)
    .single();

  if (error || !order) {
    return notFound();
  }

  return (
    <div className="flex flex-col h-[calc(100vh-180px)] items-center justify-center">
      <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] px-40 py-20">
        <h1 className="text-xl">Order Details</h1>
        <div className="mt-12 flex flex-col gap-6">
          <div>
            <span className="font-medium">Order Id: </span>
            <span>{order.id}</span>
          </div>
          <div>
            <span className="font-medium">Receiver Name: </span>
            <span>
              {order.billingInfo?.contactDetails?.firstName + " "}
              {order.billingInfo?.contactDetails?.lastName}
            </span>
          </div>
          <div>
            <span className="font-medium">Receiver Email: </span>
            <span>{order.buyerInfo?.email}</span>
          </div>
          <div>
            <span className="font-medium">Price: </span>
            <span>{order.priceSummary?.subtotal}</span>
          </div>
          <div>
            <span className="font-medium">Payment Status: </span>
            <span>{order.paymentStatus}</span>
          </div>
          <div>
            <span className="font-medium">Order Status: </span>
            <span>{order.status}</span>
          </div>
          <div>
            <span className="font-medium">Delivery Address: </span>
            <span>
              {order.billingInfo?.address?.addressLine1 + " "}
              {order.billingInfo?.address?.city}
            </span>
          </div>
        </div>
      </div>
      <Link href="/" className="underline mt-6">
        Have a problem? Contact us
      </Link>
    </div>
  );
};

export default OrderPage;
