import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  price: Number,
  quantityAvailable: Number,
});

export default mongoose.model("book", bookSchema);
