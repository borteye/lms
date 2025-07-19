import { Button } from "@workspace/ui/components/button";
import { ArrowRight, CalendarDays, FileText } from "lucide-react";
import EmptyState from "@workspace/common/components/dashboard-empty-state";
import { dashboardEmptyStates } from "@/lib/loops";
import CoursesCommon from "@workspace/common/components/courses-common";
import CourseCard from "@workspace/common/components/course-card";

export default function Dashboard() {
  const old = true;
  return (
    <div className="flex flex-col gap-y-12">
      <div className="banner text-white p-8 rounded-lg">
        <div className="w-full md:max-w-[580px] flex flex-col gap-6">
          <h1 className="text-lg font-bold">
            {old ? "Good Morning, " : " Welcome to your Learning Dashboard, "}
            Stephen
          </h1>
          <p>
            {old
              ? "Welcome back to your learning dashboard. You have 3 upcoming assignments and 2 new messages."
              : "You haven't enrolled in any courses yet. Discover courses that match your interests and start your learning journey today."}
          </p>
          <Button variant="secondary">
            {old ? "Continue Learning" : " Browse Courses"}
            <ArrowRight />
          </Button>
        </div>
        <div className="border-t-2 border-dash-boarder mt-6">
          <div className="flex gap-4 mt-4">
            <div>
              <p>Overall Progress</p>
              <h1 className="font-bold text-xl"> 45% </h1>
            </div>
            <div className="border-x-2 border-dash-boarder px-4">
              <p>Overall Progress</p>
              <h1 className="font-bold text-xl"> 45% </h1>
            </div>
            <div>
              <p>Overall Progress</p>
              <h1 className="font-bold text-xl"> 45% </h1>
            </div>
          </div>
        </div>
      </div>
      {!old && (
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 w-full">
          {dashboardEmptyStates?.map((state) => (
            <EmptyState key={state.id} data={state} />
          ))}
        </div>
      )}
      <div className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4 rounded-lg">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <CalendarDays className="text-primary" /> Calendar
        </h1>
        <div className="flex gap-2 bg-primary/10 p-8 rounded-md mt-4">
          <FileText className="text-primary" />
          <div>
            <h1 className="font-semibold text-primary">
              Q&A Visualization Techniques
            </h1>
            <h3 className="text-dash-boarder">May 15, 2025</h3>
            <p className="text-sm text-gray-400 mt-2">3:00 PM GMT</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-semibold mb-6">Most Recent Courses</h1>
        <CoursesCommon>
          <CourseCard role="student" />
          <CourseCard role="student" />
          <CourseCard role="student" />
          <CourseCard role="student" />
        </CoursesCommon>
      </div>
    </div>
  );
}
