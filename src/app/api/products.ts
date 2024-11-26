import { getAllProducts, addProduct } from "../../lib/productQueries";

// GET all products
export const getProductsHandler = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

// POST new product
export const addProductHandler = async (req, res) => {
  const { name, description, category_id, price, stock, images } = req.body;

  try {
    const product = await addProduct({
      name,
      description,
      category_id,
      price,
      stock,
      images,
    });
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).json({ error: "Error adding product" });
  }
};

export default async (req, res) => {
  if (req.method === "GET") {
    await getProductsHandler(req, res);
  } else if (req.method === "POST") {
    await addProductHandler(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
