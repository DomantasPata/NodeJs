import express from "express";
import router from "./router.js";

const PORT = 3000;

const app = express();

app.listen(PORT, () => console.log(`app listening ${PORT}`));
