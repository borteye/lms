import BreadCrumb from "@workspace/common/components/bread-crumb";
import Image from "next/image";
import courseBanner from "@workspace/assets/images/course-banner.png";
import { Progress } from "@workspace/ui/components/progress";
import CourseContentSection from "@/components/courses/course-content-section";


export default function CourseDetails() {
  return (
    <div>
      <BreadCrumb title="Data Science" />
      <div className="mt-4 flex flex-col gap-12">
        <Image
          src={courseBanner}
          alt="course image"
          width={1000}
          height={1000}
          quality={100}
          priority
          className="w-full h-[300px] object-cover rounded-xl"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Advanced Data Science with Python
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 text-2xl bg-primary flex items-center justify-center text-white rounded-full">
              GB
            </div>
            <div>
              <h1 className="text-xl font-semibold">Ms. Sarah Johnson</h1>
              <p>Course Instructor</p>
            </div>
          </div>
        </div>

        <div className="border p-4 rounded-xl flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-lg font-medium text-gray-500">
              Course Progress
            </h1>
            <p className="text-primary">50%</p>
          </div>
          <Progress value={50} />
        </div>
        <div>
          <CourseContentSection />
        </div>
      </div>
    </div>
  );
}
