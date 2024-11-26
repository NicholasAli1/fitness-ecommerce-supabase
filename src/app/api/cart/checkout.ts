export default async function handler(req, res) {
  // Example checkout logic
  res.status(200).json({ redirectUrl: "/checkout" });
}
