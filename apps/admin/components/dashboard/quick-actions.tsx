import { LucideIcon, User } from "lucide-react";

interface QuickActionsProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function QuickActions({
  icon: Icon,
  description,
  title,
}: QuickActionsProps) {
  return (
    <div className="border-2 border-dashed p-4 rounded-lg justify-center items-center flex flex-col gap-4">
      <Icon className="text-primary" size={32} />
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
