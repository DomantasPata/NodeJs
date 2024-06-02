import express from "express";
import { getUsers, addNewUser } from "../controllers/userControllers.js";
const router = express.Router();

router.get("/user", getUsers);

router.post("/user", addNewUser);

export default router;
