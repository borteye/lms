import { Bell } from "lucide-react";

export default function HeaderBar() {
  return (
    <div className="border-b bg-white drop-shadow-xs fixed top-0 right-0 w-full py-4 px-12 -z-10">
      <div className="flex items-center justify-end w-full gap-4">
        <div className="border border-input p-2.5 rounded-full">
          <Bell />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-primary h-11 w-11 flex items-center justify-center rounded-full text-white font-medium text-lg">
            <p>B</p>
          </div>
          <div>
            <p className="text-sm">Gustavo</p>
            <p className="text-xs text-muted-foreground">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}
