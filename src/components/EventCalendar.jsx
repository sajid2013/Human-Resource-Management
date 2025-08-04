"use client";
import { useState } from "react";
import "./EventCalendar.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="right-main ">
      <Calendar onChange={onChange} value={value} />
      <div className="title">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#64748b" }} />
      </div>
      <div className="map-main">
        {events.map((event) => (
          <div className="map-div" key={event.id}>
            <div className="flex items-center justify-between ">
              <h1 className="text-xl font-semibold text-gray-600">
                {event.title}
              </h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
