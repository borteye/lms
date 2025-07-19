import { cn } from "@workspace/ui/lib/utils";
import { Paperclip, MessageSquare, FileText } from "lucide-react";

export type Message = {
  name: string;
  icon: "assignment" | "discussion" | "message";
  title: string;
  course: string;
  message: string;
  time: string;
  // active?: boolean;
  avatar?: string;
};

type MessageCardProps = Message;

const icons = {
  assignment: FileText,
  discussion: MessageSquare,
  message: Paperclip,
};

export function MessageCard({
  name,
  icon,
  title,
  course,
  message,
  time,
}: MessageCardProps) {
  const Icon = icons[icon];
  return (
    <div
      className={cn(
        "group flex cursor-pointer items-start gap-4 rounded-lg border border-transparent p-2 md:p-4 transition-colors duration-200 hover:border-l-4 hover:border-l-blue-500 hover:bg-blue-50"
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold text-gray-600">
        {name.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <Icon className="h-5 w-5 text-gray-600" />
          <p className="font-medium">{title}</p>
          <span className="text-sm text-gray-500">• {course}</span>
        </div>
        <p className="mt-2 text-gray-700">{message}</p>
      </div>
    </div>
  );
}
