import dbConnect from "@/lib/dbConnect";
import Cart from "@/models/Cart";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "DELETE") {
    const { id } = req.query;
    await Cart.updateOne(
      { userId: req.userId },
      { $pull: { items: { _id: id } } }
    );
    res.status(200).json({ success: true });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
