import express from "express";

import {
  addCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  getAllCompanyProfiles,
  addCompanyProfile,
  updateProfile,
} from "./controllers.js";

const router = express.Router();

router.post("/company", addCompany);
router.get("/companies", getCompanies);
router.get("/company/:id", getCompanyById);
router.put("/company/:id", updateCompany);
router.get("/companyProfiles", getAllCompanyProfiles);
router.post("/companyProfiles", addCompanyProfile);
router.put("/companyProfiles/:id", updateProfile);

export default router;
