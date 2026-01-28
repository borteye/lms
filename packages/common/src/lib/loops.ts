import {
  Settings,
  LayoutDashboard,
  BookOpen,
  FileText,
  GraduationCap,
  MessageSquare,
  LogOut,
  Users
} from "lucide-react";

export const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    permissions: ["lecturer", "admin", "student"],
  },
  {
    id: "users",
    label: "User Management",
    icon: Users,
    href: "/user-management",
    permissions: ["admin"],
  },
  {
    id: "courses",
    label: "My Courses",
    icon: BookOpen,
    href: "/courses",
    permissions: ["student"],
  },
  {
    id: "courses",
    label: "Courses",
    icon: BookOpen,
    href: "/courses",
    permissions: ["admin", "lecturer"],
  },
  {
    id: "assignments",
    label: "Assignments",
    icon: FileText,
    href: "/assignments",
    permissions: ["student"],
  },
  {
    id: "grades",
    label: "Grades",
    icon: GraduationCap,
    href: "/grades",
    permissions: ["student"],
  },
  {
    id: "messages",
    label: "Messages",
    icon: MessageSquare,
    href: "/messages",
    permissions: ["lecturer", "admin", "student"],
  },
];

export const bottomItems = [
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/settings",
    permissions: ["lecturer", "admin", "student"],
  },
  {
    id: "logout",
    label: "Log Out",
    icon: LogOut,
    href: "/logout",
    permissions: ["lecturer", "admin", "student"],
  },
];
