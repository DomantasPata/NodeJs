import mongoose from "mongoose";

const CompaniesSchema = new mongoose.Schema({
  name: String,
  industry: String,
  location: String,
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CompanyProfile",
    required: true,
  },
});

export default mongoose.model("Company", CompaniesSchema);
