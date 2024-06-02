import mongoose from "mongoose";

const attendeesSchema = mongoose.Schema({
  name: String,
  email: String,
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
});

export default mongoose.model("attendees", attendeesSchema);
