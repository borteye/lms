import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { CalendarDays, LucideIcon } from "lucide-react";

interface Props {
  id: number;
  heading: string;
  icon: LucideIcon;
  title: string;
  description: string;
  button?: undefined | string;
}

export default function EmptyState({ data }: { data: Props }) {
  return (
    <div className="bg-black/1 rounded-lg">
      <div className="flex justify-between px-8 py-4 border-b text-gray-700">
        <h1>{data?.heading}</h1>
        <h1>May 2025</h1>
      </div>

      <div className="max-w-[378px] mx-auto flex flex-col justify-center items-center gap-5 py-8 text-center">
        <div className="bg-primary/10 p-4 w-fit rounded-full">
          <data.icon className="text-primary" />
        </div>
        <h1 className="text-xl font-medium">{data?.title}</h1>
        <p className="text-gray-500">{data?.description}</p>
        {data?.button && <Button variant="outline">{data?.button}</Button>}
      </div>
    </div>
  );
}
