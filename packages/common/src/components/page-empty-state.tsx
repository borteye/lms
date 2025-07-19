import { Button } from "@workspace/ui/components/button";
import { BookOpen } from "lucide-react";

export default function PageEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="bg-primary/10 text-primary p-8 md:p-12 w-fit rounded-full">
        <BookOpen size={62} />
      </div>
      <div className="w-full max-w-[371px] text-center">
        <h1 className="text-xl font-medium">
          You haven't enrolled in any courses yet
        </h1>
        <p>
          Browse available courses and start learning at your own pace
        </p>
      </div>
      <Button variant="outline">Explore Courses to Begin</Button>
    </div>
  );
}
