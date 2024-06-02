import express from "express";

import {
  addEvent,
  addAttendee,
  getAttendees,
  getEvents,
  deleteEventById,
  getEventsById,
  updateEvent,
  updateAttendee,
  deleteAttendeesById,
  addAttendeeId,
} from "./controllers.js";

const router = express.Router();

router.post("/events", addEvent);
router.post("/attendees", addAttendee);
router.get("/events", getEvents);
router.get("/attendees", getAttendees);
router.delete("/events/:id", deleteEventById);
router.get("/events/:id", getEventsById);
router.put("/events/:id", updateEvent);
router.put("/attendees/:id", updateAttendee);
router.delete("/attendees/:id", deleteAttendeesById);
router.post("/:eventId/attendees/:attendeeId", addAttendeeId);

export default router;
