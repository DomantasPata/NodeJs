import attendees from "./models/attendees.js";
import Attendees from "./models/attendees.js";
import Events from "./models/events.js";

export async function addEvent(req, res) {
  const { name, date, location, description } = req.body;

  const newEvent = new Events({
    name,
    date,
    location,
    description,
  });

  await newEvent.save();

  res.json(newEvent);
}

export async function addAttendee(req, res) {
  const { name, email } = req.body;

  const newAttendee = new Attendees({
    name,
    email,
  });

  await newAttendee.save();

  res.json(newAttendee);
}

export async function getEvents(req, res) {
  const events = await Events.find({}, { __v: 0 });

  res.json(events);
}

export async function getEventsById(req, res) {
  const { id } = req.params;
  const events = await Events.findById(id, { __v: 0 });

  res.json(events);
}

export async function getAttendees(req, res) {
  const attendees = await Attendees.find({}, { __v: 0 });

  res.json(attendees);
}

export async function deleteEventById(req, res) {
  const { id } = req.params;
  const deletedEvent = await Events.findByIdAndDelete(id);

  res.json(deletedEvent);
}

export async function updateEvent(req, res) {
  const { id } = req.params;
  const { name, date, location, description } = req.body;

  const event = await Events.findById(id);

  if (name) {
    event.name = name;
  }
  if (date) {
    event.date = date;
  }
  if (location) {
    event.location = location;
  }
  if (description) {
    event.description = description;
  }
  await event.save();

  res.json(event);
}

// export async function addAttendeeById(req, res) {
//   const { id, attendeesId } = req.params;

//   try {
//     const event = await Event.findById(id);
//     if (!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }
//     const attendee = await Attendees.findById(attendeesId);
//     if (!attendee) {
//       return res.status(404).json({ message: "Attendee not found" });
//     }
//     if (event.attendees.includes(attendeesId)) {
//       return res
//         .status(400)
//         .json({ message: "Attendee already added to this event" });
//     }
//     event.attendees.push(attendeesId);
//     await event.save();
//     res
//       .status(200)
//       .json({ message: "Attendee added to event successfully", event });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding attendee to event", error });
//   }
// }

export async function updateAttendee(req, res) {
  const { id } = req.params;
  const { name, email } = req.body;

  const attendees = await Attendees.findById(id);

  if (name) {
    attendees.name = name;
  }
  if (email) {
    attendees.email = email;
  }

  await attendees.save();

  res.json(attendees);
}

export async function deleteAttendeesById(req, res) {
  const { id } = req.params;
  const deletedAttendees = await Attendees.findByIdAndDelete(id);

  res.json(deletedAttendees);
}

export async function addAttendeeId(req, res) {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const attendee = await Attendees.findById(req.params.attendeeId);
    if (!attendee) {
      return res.status(404).json({ message: "Attendee not found" });
    }

    if (event.attendeeIds.includes(req.params.attendeeId)) {
      return res
        .status(400)
        .json({ message: "Attendee already added to this event" });
    }

    event.attendeeIds.push(req.params.attendeeId);
    await event.save();
    res
      .status(200)
      .json({ message: "Attendee added to event successfully", event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
