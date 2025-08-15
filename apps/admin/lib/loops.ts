import { BookOpen, ChartLine, User } from "lucide-react";

export const quickActions = [
  {
    icon: User,
    title: "Add New User",
    description: "Create student or teacher account",
    link: "/user-management/create",
  },
  {
    icon: BookOpen,
    title: "Create New Course",
    description: "Create a new course",
    link: "/courses",
  },
  {
    icon: ChartLine,
    title: "View Reports",
    description: "View reports of your school",
    link: "/courses",
  },
];
