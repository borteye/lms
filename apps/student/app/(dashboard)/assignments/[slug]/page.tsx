import BreadCrumb from "@workspace/common/components/bread-crumb";
import { Clock, FileText } from "lucide-react";
import FileInput from "@workspace/common/components/file-input";
import { Button } from "@workspace/ui/components/button";

export default function AssignmentDetails() {
  return (
    <div>
      <BreadCrumb prevHref="/assignments" prevLabel="Assignments" title="DSA" />
      <div className="flex flex-col gap-12 mt-4">
        <div>
          <h1 className="text-2xl font-semibold">DSA</h1>
          <p className="text-gray-500">Data Structures & Algorithm (CS310)</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Instruction</h1>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex flex-col gap-4">
              <p className="text-primary flex items-center gap-2">
                <FileText size={20} />
                <span className="text-black font-semibold">Assigned:</span>{" "}
                <span className="text-gray-500"> May 3, 2025</span>
              </p>
              <p className="text-red-500 flex items-center gap-2">
                <Clock size={20} />
                <span className="text-black font-semibold">Due Date:</span>{" "}
                <span className="text-gray-500"> May 3, 2025</span>
              </p>
            </div>
            <div className="border-t mt-4 pt-4">
              <h1 className="text-lg font-medium">Description</h1>
              <p className="text-gray-500">
                Data Structures & Algorithm (CS310) Data Structures & Algorithm
                (CS310) Data Structures & Algorithm (CS310) Data Structures &
                Algorithm (CS310) Data Structures & Algorithm (CS310) Data
                Structures & Algorithm (CS310)
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Submission</h1>
          <form className="flex flex-col gap-4">
            <FileInput accept=".pdf" uploadType="document" />
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
