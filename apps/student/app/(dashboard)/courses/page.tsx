import CourseCard from "@workspace/common/components/course-card";
import CoursesCommon from "@workspace/common/components/courses-common";
import PageEmptyState from "@workspace/common/components/page-empty-state";
export default function CoursesPage() {
  const courses = true;
  return (
    <div className="h-full">
      {!courses && (
        <div className="h-full flex items-center justify-center">
          <PageEmptyState />
        </div>
      )}

      {courses && (
        <>
          <h1 className="text-xl font-semibold mb-4">All Courses</h1>
          <CoursesCommon>
            <CourseCard role="student" />
            <CourseCard role="student" />
            <CourseCard role="student" />
            <CourseCard role="student" />
          </CoursesCommon>
        </>
      )}
    </div>
  );
}
