import mongoose from "mongoose";

const CompanyProfileSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  founder: String,
  foundedYear: Number,
  numberOfEmployees: Number,
});

export default mongoose.model("CompanyProfile", CompanyProfileSchema);
