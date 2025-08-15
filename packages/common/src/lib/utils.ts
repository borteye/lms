import { getHours } from "date-fns";

export function getTimeOfDay(date = new Date()) {
  const hour = getHours(date);

  if (hour >= 5 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 17) {
    return "afternoon";
  } else {
    return "evening";
  }
}

