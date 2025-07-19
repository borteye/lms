import { CheckCircle } from "lucide-react";

export default function Overview() {
  return (
    <div className="flex flex-col gap-12 mt-4">
      <div>
        <h1 className="font-semibold text-xl">About The Overview</h1>
        <p className="text-gray-600 mt-4">
          Dive into advanced data manipulation, statistical analysis, and
          machine learning techniques using Python. This course builds upon
          foundational data science knowledge to equip you with the skills to
          tackle complex real-world problems.
        </p>
      </div>

      <div>
        <h1 className="font-semibold text-xl">What You&apos;ll Learn</h1>
        <div className="flex flex-col gap-4 mt-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-gray-600 text-lg"
            >
              <CheckCircle className="text-primary" />
              <p>Advanced data learning and preprocessing</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
