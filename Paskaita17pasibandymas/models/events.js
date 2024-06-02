import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  name: String,
  date: String,
  location: String,
  description: String,
  attendeesId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attendees",
    },
  ],
});

export default mongoose.model("events", eventSchema);
