import { CalendarDays, ClipboardList, Home, Settings, Timer } from "lucide-react";

export const navigationItems = [
  {
    id: 0,
    icon: <Home  size={32}/>,
    title: "Home",
    href: "/"
  },
  {
    id: 1,
    icon: <ClipboardList  size={32}/>,
    title: "My Tasks",
    href: "/tasks",
  },
  {
    id: 2,
    icon: <CalendarDays size={32} />,
    title: "Calendar",
    href: "/calendar",
  },
  {
    id: 3,
    icon: <Timer size={32}/>,
    title: "Pomodoro",
    href: "/pomodoro",
  },
  {
    id: 4,
    icon: <Settings size={32} />,
    title: "Settings",
    href: "/settings",
  },
  
];