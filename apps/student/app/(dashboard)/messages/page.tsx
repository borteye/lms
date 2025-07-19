import {
  MessageCard,
  type Message,
} from "@workspace/common/components/message-card";

const messages: Message[] = [
  {
    name: "Prof. Sarah Johnson",
    icon: "assignment",
    title: "Assignment",
    course: "CS301: Data Structures",
    message:
      "This is a reminder that your final project for CS301 is due this Friday at 11:59 PM. Please ensure you submit all required files through the course portal.",
    time: "April 10, 2:30 AM",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
  },
  {
    name: "Dr. Michael Chen",
    icon: "message",
    title: "Office Hours Canceled Tomorrow",
    course: "PHYS202: Quantum Mechanics",
    message:
      "Due to an unexpected faculty meeting, I need to cancel my office hours scheduled for tomorrow (Tuesday) from 2-4 PM....",
    time: "April 10, 11:15 AM",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704e",
  },
  {
    name: "Prof. Sarah Johnson",
    icon: "discussion",
    title: "Discussion",
    course: "CS301: Data Structures",
    message:
      "This is a reminder that your final project for CS301 is due this Friday at 11:59 PM. Please ensure you submit all required files through the course portal.",
    time: "April 10, 2:30 PM",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
  },
];

export default function MessagesPage() {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-3xl font-bold">Messages & Notifications</h1>
      <div className="space-y-2">
        {messages.map((msg, index) => (
          <MessageCard key={index} {...msg} />
        ))}
      </div>
    </div>
  );
}
