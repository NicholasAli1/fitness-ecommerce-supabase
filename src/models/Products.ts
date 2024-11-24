import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  Treadmill: { Type: String, required: false },
});
