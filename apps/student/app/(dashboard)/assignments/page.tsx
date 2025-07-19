import { Clock } from "lucide-react";
import { Input } from "@workspace/ui/components/input";
import AssignmentSection from "@/components/assignment/assignment-section";

export default function AssignmentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Assignments</h1>
      {/* <PageEmptyState /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border p-4 rounded-lg flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
              <Clock />
            </div>
            Upcoming Deadlines
          </div>
          <h1 className="text-4xl font-semibold text-center">2</h1>
          <p className="text-gray-500">Remember to Submit them on time</p>
        </div>
        <div className="bg-white border p-4 rounded-lg flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
              <Clock />
            </div>
            Upcoming Deadlines
          </div>
          <h1 className="text-4xl font-semibold text-center">2</h1>
          <p className="text-gray-500">Remember to Submit them on time</p>
        </div>
        <div className="bg-white border p-4 rounded-lg flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
              <Clock />
            </div>
            Upcoming Deadlines
          </div>
          <h1 className="text-4xl font-semibold text-center">2</h1>
          <p className="text-gray-500">Remember to Submit them on time</p>
        </div>
      </div>
      <div className="mt-24">
        <div className="flex justify-between gap-40 relative">
          <h1 className="text-lg">All Assignment</h1>
          <Input
            placeholder="Search by assignment name, status and course title"
            variant="outline"
            className="max-w-[40%] h-12"
          />
        </div>
        <AssignmentSection />
      </div>
    </div>
  );
}
