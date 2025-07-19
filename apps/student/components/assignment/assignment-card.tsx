import { Button } from "@workspace/ui/components/button";
import { Clock, FileText } from "lucide-react";

export default function AssignmentCard() {
  return (
    <div className="border bg-white p-6 rounded-lg flex flex-col gap-8">
      <div className="flex items-start gap-4 justify-between">
        <div>
          <h1 className="text-lg font-medium">DSA</h1>
          <p className="text-sm text-gray-500">
            Data Structures & Algorithm (CS310)
          </p>
        </div>
        <p className="bg-green-100 text-sm text-green-500 py-1 px-3 rounded-full w-fit">
          Graded
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-2 text-base">
            <Clock size={18} />
            Due May 3, 2025 11:59 PM
          </h1>
          <p className="text-gray-500 flex items-center gap-2 mt-3">
            <FileText size={18} /> 2 Attachments
          </p>
        </div>
        <Button>View Details</Button>
      </div>
    </div>
  );
}
