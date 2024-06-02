import express from "express";
import books from "./books.js";

const router = express.Router();

router.use("/book", books);

export default router;
