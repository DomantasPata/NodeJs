import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router.js";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "Events" })
  .then(() => console.log("Connected to Mongo DB"))
  .catch(() => console.log("Failed"));

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`app listening in PORT: ${PORT}`));
