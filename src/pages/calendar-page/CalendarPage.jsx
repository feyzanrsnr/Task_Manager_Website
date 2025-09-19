// import { useEffect, useRef, useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
// import { Trash2, X } from "lucide-react";

// export default function CalendarApp() {
//   const calendarRef = useRef();
//   const [events, setEvents] = useState([]);
//   const [externalEvents, setExternalEvents] = useState([]);

//   // Sayfa açıldığında localStorage'dan yükle
//   useEffect(() => {
//     const savedEvents = JSON.parse(localStorage.getItem("calendarEvents") || "[]");
//     setEvents(savedEvents);

//     const savedExternal = JSON.parse(localStorage.getItem("externalEvents") || "[]");
//     setExternalEvents(savedExternal);
//   }, []);

//   // Draggable başlat
//   useEffect(() => {
//     let draggableEl = document.getElementById("external-events");
//     new Draggable(draggableEl, {
//       itemSelector: ".fc-event",
//       eventData: function (eventEl) {
//         return { title: eventEl.innerText };
//       }
//     });
//   }, [externalEvents]);

//   // External event ekleme
//   const addExternalEvent = (title) => {
//     if (!title.trim()) return;
//     if (externalEvents.includes(title)) return; // Tekrar ekleme

//     const updatedExternal = [...externalEvents, title];
//     setExternalEvents(updatedExternal);
//     localStorage.setItem("externalEvents", JSON.stringify(updatedExternal));
//   };

//   // Takvime sürüklenen event
//   const handleEventReceive = (info) => {
//     const newEvent = {
//       id: Date.now(),
//       title: info.event.title,
//       start: info.event.start,
//       allDay: true
//     };

//     // Takvimde zaten var mı kontrol et
//     const exists = events.some(ev =>
//       ev.title === newEvent.title &&
//       new Date(ev.start).getTime() === newEvent.start.getTime()
//     );
//     if (exists) {
//       info.revert(); // Tekrar eklenmeyi engelle
//       return;
//     }

//     info.event.setProp("id", newEvent.id);
//     const updatedEvents = [...events, newEvent];
//     setEvents(updatedEvents);
//     localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents));
//   };

//   // Event tarih değiştiğinde
//   const handleEventChange = (info) => {
//     const updatedEvents = events.map(ev =>
//       ev.id.toString() === info.event.id.toString()
//         ? { ...ev, start: info.event.start }
//         : ev
//     );
//     setEvents(updatedEvents);
//     localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents));
//   };

//   // Takvimden silme
//   // const handleEventClick = (info) => {
//   //   if (window.confirm(`"${info.event.title}" etkinliğini silmek istiyor musun?`)) {
//   //     const updatedEvents = events.filter(ev => ev.id.toString() !== info.event.id.toString());
//   //     setEvents(updatedEvents);
//   //     localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents));
//   //     info.event.remove();
//   //   }
//   // };


//   // Event silme ikonu ile
//   const renderEventContent = (eventInfo) => {
//     return (
//       <div className="flex justify-between items-center gap-2">
//         <span>{eventInfo.event.title}</span>
//         <Trash2
//           size={14}
//           className="cursor-pointer hover:text-red-500"
//           onClick={(e) => {
//             e.stopPropagation();
//             if (window.confirm(`"${eventInfo.event.title}" etkinliğini silmek istiyor musun?`)) {
//               // Takvimden kaldır
//               eventInfo.event.remove();
//               // State ve localStorage güncelle
//               const updatedEvents = events.filter(ev => ev.id.toString() !== eventInfo.event.id.toString());
//               setEvents(updatedEvents);
//               localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents));
//             }
//           }}
//         />
//       </div>
//     );
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-start gap-4 p-5 w-full">

//       {/* Sağ tarafta event ekleme alanı */}
//       <div id="external-events" className="flex flex-col items-start gap-3 bg-white p-4 rounded-xl shadow-md w-fit md:w-64 h-fit">
//         <div className="flex flex-col items-center gap-2">
//           <span className="text-lg font-semibold text-black">Etkinlik Ekle</span>
//         <input
//           type="text"
//           placeholder="Etkinlik adı"
//           className="border border-gray-300 text-gray-700 rounded-md p-2 w-48 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               addExternalEvent(e.target.value);
//               e.target.value = "";
//             }
//           }}
//         />
//         </div>
//         {externalEvents.map((title, idx) => (
//         <div
//             key={idx}
//             className="fc-event bg-sunrise dark:bg-amethyst text-white px-3 py-1 rounded-md cursor-grab flex items-center gap-3">
//             {title}
//             <X
//             size={22}
//             className="cursor-pointer"
//             onClick={(e) => {
//             e.stopPropagation();
//             if (window.confirm(`"${title}" etkinliğini silmek istiyor musun?`)) {
//             const updatedExternal = externalEvents.filter((t) => t !== title);
//             setExternalEvents(updatedExternal);
//             localStorage.setItem(
//               "externalEvents",
//               JSON.stringify(updatedExternal)
//             );
//           }
//         }}/>
//         </div>
//         ))}
//       </div>

//       {/* Takvim */}
//       <div className="w-full md:w-[900px]">
//         <FullCalendar
//           ref={calendarRef}
//           plugins={[dayGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           // height="550px"
//           height="auto"           // Takvim yüksekliği içeriğe göre ayarlanır
//           contentHeight="auto"    // İçerik yüksekliği de otomatik olur
//           expandRows={true}    
//           droppable={true}
//           editable={true}
//           events={events}
//           eventReceive={handleEventReceive}
//           eventChange={handleEventChange}
//           // eventClick={handleEventClick}
//           eventContent={renderEventContent}
//           headerToolbar={{
//             left: "prev",
//             center: "title",
//             right: "next"
//           }}
//           titleFormat={{ year: 'numeric', month: 'long' }}
//           dayCellClassNames={() =>
//             "bg-white hover:bg-slate-100 transition border border-gray-200"
//           }
//           dayHeaderClassNames={() =>
//             "bg-white text-gray-600 font-bold text-lg border border-gray-200"
//           }
//           eventClassNames={() =>
//             "bg-blue-400 text-white text-sm p-1 rounded border-none"
//           }
//         />
//       </div>
//     </div>
//   );
// }



import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { Plus, Trash2, X } from "lucide-react";

export default function CalendarApp() {
  const calendarRef = useRef();
  const [events, setEvents] = useState([]);
  const [externalEvents, setExternalEvents] = useState([]);
  const [inputValue, setInputValue] = useState("")

  // Sayfa açıldığında localStorage'dan yükle
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("calendarEvents") || "[]");
    setEvents(savedEvents);

    const savedExternal = JSON.parse(localStorage.getItem("externalEvents") || "[]");
    setExternalEvents(savedExternal);
  }, []);

  // Draggable başlat
  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        return { title: eventEl.innerText };
      }
    });
  }, [externalEvents]);

  // External event ekleme
  const addExternalEvent = (title) => {
    if (!title.trim()) return;
    if (externalEvents.includes(title)) return; // Tekrar ekleme

    const updatedExternal = [...externalEvents, title];
    setExternalEvents(updatedExternal);
    localStorage.setItem("externalEvents", JSON.stringify(updatedExternal));
  };

  // Takvime sürüklenen event
  const handleEventReceive = (info) => {
    const newEvent = {
      id: Date.now(),
      title: info.event.title,
      start: info.event.start,
      allDay: true
    };

    // Takvimde zaten var mı kontrol et
    const exists = events.some(ev =>
      ev.title === newEvent.title &&
      new Date(ev.start).getTime() === newEvent.start.getTime()
    );
    if (exists) {
      info.revert(); // Tekrar eklenmeyi engelle
      return;
    }

    info.event.setProp("id", newEvent.id);
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents));
  };

  // Event tarih değiştiğinde
  const handleEventChange = (info) => {
    const updatedEvents = events.map(ev =>
      ev.id.toString() === info.event.id.toString()
        ? { ...ev, start: info.event.start }
        : ev
    );
    setEvents(updatedEvents);
    localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents));
  };

  // Event silme ikonu ile
  const renderEventContent = (eventInfo) => {
    return (
      <div className="flex justify-between items-center gap-2">
        <span>{eventInfo.event.title}</span>
        <Trash2
          size={14}
          className="cursor-pointer hover:text-red-500"
          onClick={(e) => {
            e.stopPropagation();
            if (window.confirm(`"${eventInfo.event.title}" etkinliğini silmek istiyor musun?`)) {
              // Takvimden kaldır
              eventInfo.event.remove();
              // State ve localStorage güncelle
              const updatedEvents = events.filter(ev => ev.id.toString() !== eventInfo.event.id.toString());
              setEvents(updatedEvents);
              localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents));
            }
          }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-4 p-5">

      {/* Event ekleme alanı */}
      <div
        id="external-events"
        className="flex flex-col gap-3 bg-white p-4 rounded-xl shadow-md h-fit w-full md:w-64 "
      >
        <div className="flex flex-col items-center gap-2 w-full">
          <span className="text-md md:text-lg font-semibold text-black">Etkinlik Ekle</span>
          <div className="flex items-center">
            <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Etkinlik adı"
            className="border border-gray-300 text-gray-700 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
           onClick={() => {
                addExternalEvent(inputValue);
                setInputValue("") ;
            }}
           className="border border-gray-300 text-gray-700 rounded-md p-2">
            <Plus/>
          </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {externalEvents.map((title, idx) => (
          <div
            key={idx}
            className="fc-event bg-sunrise dark:bg-amethyst text-white text-sm md:text-base px-3 py-1 rounded-md cursor-grab flex items-center gap-3"
          >
            {title}
            <X
              size={22}
              className="cursor-pointer ml-auto"
              onClick={(e) => {
                e.stopPropagation();
                if (window.confirm(`"${title}" etkinliğini silmek istiyor musun?`)) {
                  const updatedExternal = externalEvents.filter((t) => t !== title);
                  setExternalEvents(updatedExternal);
                  localStorage.setItem("externalEvents", JSON.stringify(updatedExternal));
                }
              }}
            />
          </div>
        ))}
        </div>

      </div>

      {/* Takvim */}
      <div className="w-full md:w-[900px]">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height="600px"
          // contentHeight="auto"
          expandRows={true}    
          droppable={true}
          editable={true}
          events={events}
          eventReceive={handleEventReceive}
          eventChange={handleEventChange}
          eventContent={renderEventContent}
          headerToolbar={{
            left: "title",
            right: "prev,next",
          }}
          titleFormat={{ year: 'numeric', month: 'long' }}
          dayCellClassNames={() =>
            "bg-white hover:bg-slate-100 transition border border-gray-200"
          }
          dayHeaderClassNames={() =>
            "bg-white text-gray-600 font-bold text-lg border border-gray-200"
          }
          eventClassNames={() =>
            "bg-blue-400 text-white text-sm p-1 rounded border-none"
          }
        />
      </div>
    </div>
  );
}
