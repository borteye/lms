import { Blocks, CalendarDays, BookOpen, LucideIcon } from "lucide-react";

export const dashboardEmptyStates = [
  {
    id: 1,
    heading: "Calendar",
    icon: CalendarDays as LucideIcon,
    title: "No upcoming classes or assignments",
    description:
      "Your schedule will appear here once you enroll in courses and have upcoming deadlines.",
  },
  {
    id: 2,
    heading: "Progress",
    icon: Blocks as LucideIcon,
    title: "No learning activity yet",
    description: "Your progress will appear here once you start a course.",
  },
  {
    id: 3,
    heading: "Most Recent Courses",
    icon: BookOpen as LucideIcon,
    title: "You haven't started any courses yet",
    description:
      "Explore our catalog to find courses that match your interests and learning goals.",
    button: "Explore Courses to Begin",
  },
  {
    id: 4,
    heading: "Assignments",
    icon: CalendarDays as LucideIcon,
    title: "Your enrolled course assignment will show here",
    description:
      "Once you begin a course, you'll be able to track your assignments deadlines in this space.",
  },
];

export const courseTabs = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "module",
    label: "Module",
  },
];
