import express from "express";
const router = express.Router();

router.get("/labas", (req, res) => {
  res.json({
    labas: "labas",
  });
});

export default Router;
