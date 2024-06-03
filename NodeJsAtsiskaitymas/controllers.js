import Companies from "./models/companies.js";
import CompanyProfiles from "./models/companyprofiles.js";
import mongoose from "mongoose";

//Add a new company.

export async function addCompany(req, res) {
  try {
    const { name, industry, location, profileId } = req.body;

    if (!profileId || !mongoose.Types.ObjectId.isValid(profileId)) {
      return res.status(400).json({ message: "A valid profileId is required" });
    }

    const newCompany = new Companies({
      name,
      industry,
      location,
      profileId,
    });
    await newCompany.save();

    res.status(201).json(Companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Fetch all companies.

export async function getCompanies(req, res) {
  const companies = await Companies.find({}, { __v: 0 });

  res.json(companies);
}

//Fetch a single company by ID and it's company profile

export async function getCompanyById(req, res) {
  try {
    const company = await Companies.findById(req.params.id, {
      __v: 0,
    }).populate("profileId");
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Update a company by ID.

export async function updateCompany(req, res) {
  const { id } = req.params;
  const { name, industry, location } = req.body;

  const companies = await Companies.findById(id);

  if (name) {
    companies.name = name;
  }
  if (industry) {
    companies.industry = industry;
  }
  if (location) {
    companies.location = location;
  }
  await companies.save();

  res.json(companies);
}

//Fetch all company profiles.

export async function getAllCompanyProfiles(req, res) {
  try {
    const profiles = await CompanyProfiles.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Add a new company profile (linked to a company).

export async function addCompanyProfile(req, res) {
  try {
    const { companyId, founder, foundedYear, numberOfEmployees } = req.body;

    if (!companyId || !mongoose.Types.ObjectId.isValid(companyId)) {
      return res.status(400).json({ message: "A valid companyId is required" });
    }

    const newProfile = new CompanyProfiles({
      companyId,
      founder,
      foundedYear,
      numberOfEmployees,
    });
    await newProfile.save();

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Update a company profile by ID.

export async function updateProfile(req, res) {
  const { id } = req.params;
  const { founder, foundedYear, numberOfEmployees } = req.body;

  const profile = await CompanyProfiles.findById(id);

  if (founder) {
    profile.founder = founder;
  }
  if (foundedYear) {
    profile.foundedYear = foundedYear;
  }
  if (numberOfEmployees) {
    profile.numberOfEmployees = numberOfEmployees;
  }
  await profile.save();

  res.json(profile);
}
