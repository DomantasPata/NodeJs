import express from "express";
import dotenv from "dotenv";

dotenv.config();

process.env;

const PORT = process.env.port;

const app = express();

app.listen(PORT, () => console.nlog(`aplikacija veikia PORT ${PORT}`));
