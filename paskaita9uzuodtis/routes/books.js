import express from "express";
import {
  addBook,
  deleteBookById,
  getBookById,
  getBooks,
  updateBookById,
} from "../controllers/bookControllers.js";

const router = express.Router();

router.get("/", getBooks);

router.get("/:id", getBookById);

router.post("/", addBook);

router.put("/:id", updateBookById);

router.delete("/:id", deleteBookById);

export default router;
