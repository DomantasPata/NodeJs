import express from "express";
import { addPhone, getPhones } from "./controllers.js";

const router = express.Router();

router.get("/phones", getPhones);

router.get("/phones/:id");

router.post("/phones", addPhone);

router.put("/phones/:id");

router.delete("/phones/:id");

export default router;
