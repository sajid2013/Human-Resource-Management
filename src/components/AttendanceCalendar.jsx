"use client";
import "./AttendanceCalendar.scss";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";

const localizer = momentLocalizer(moment);

const statusColors = {
  Present: "#4caf50",         
  Absent: "#f44336",          
  "Sick Leave": "#2196f3",    
  "Casual Leave": "#ff9800",  
};

const AttendanceCalendar = ({ employeeId }) => {
    const [events, setEvents] = useState([]);
    const [view, setView] = useState(Views.MONTH);

    useEffect(() => {
        const fetchAttendance = async () => {
            try {
                const res = await fetch(`/api/attendance/${employeeId}`);
                const data = await res.json();

                // console.log("API response:", data);
                if (data.success) {
                    const formattedEvents = data.attendance.map((entry) => ({
                        title: entry.status,
                        start: new Date(entry.date),
                        end: new Date(entry.date),
                        allDay: true,
                        status: entry.status,
                    }));
                    console.log("Formatted events:", formattedEvents);
                    setEvents(formattedEvents);
                }
            } catch (error) {
                console.error("Failed to fetch attendance:", error);
            }
        };

        if (employeeId) fetchAttendance();
    }, [employeeId]);

    // Custom styling for event colors
    const eventPropGetter = (event) => ({
        className: `rbc-event  custom-event ${event.status.replace(/\s/g, "")}`,
        
    });

    return (
        <div className="calendarContainer">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                views={["month"]}
                view={view}
                onView={setView}
                className="customCalendar"
                eventPropGetter={eventPropGetter}
            />
        </div>
    );
};

export default AttendanceCalendar;
