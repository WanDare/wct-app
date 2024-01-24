"use client";
import { Height } from "@mui/icons-material";
import { useEffect } from "react";

const CalendarComponent = () => {
  useEffect(() => {
    import("@fullcalendar/core").then(({ Calendar }) => {
      import("@fullcalendar/interaction").then(
        ({ default: interactionPlugin }) => {
          import("@fullcalendar/daygrid").then(({ default: dayGridPlugin }) => {
            import("@fullcalendar/timegrid").then(
              ({ default: timeGridPlugin }) => {
                const calendarEl = document.getElementById("calendar");

                if (calendarEl) {
                  const calendar = new Calendar(calendarEl, {
                    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin],
                    initialView: "dayGridMonth",
                    editable: true,
                    events: [
                      { title: "Meeting developer", start: new Date() },
                      {
                        title: "Change event details",
                        start: "2024-02-10T16:50:00",
                      },
                      {
                        title: "Add event reaction to the post",
                        start: "2024-02-01T12:12:00",
                      },
                    ],
                    headerToolbar: {
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay",
                    },
                  });

                  calendar.render();
                }
              }
            );
          });
        }
      );
    });
  }, []);

  return <div id="calendar" />;
};
export default CalendarComponent;
