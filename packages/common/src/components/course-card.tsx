import Image from "next/image";
import courseImage from "@workspace/assets/images/course-image.png";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@workspace/ui/components/card";
import { Progress } from "@workspace/ui/components/progress";
import { Button } from "@workspace/ui/components/button";
import { UserRound, FileText, SquarePen, Trash } from "lucide-react";

interface Props {
  role: "student" | "lecturer" | "admin";
}

export default function CourseCard({ role }: { role: Props["role"] }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Image
          src={courseImage}
          alt="course image"
          width={1000}
          height={1000}
          quality={100}
          priority
          className="w-full h-[196px] object-cover rounded-sm"
        />
        {role === "student" && <Progress value={53} />}
        <CardTitle>Fundamentals of Graphic Design</CardTitle>
      </CardHeader>
      {role === "student" && (
        <CardContent>
          <p className="text-gray-400">Ms. Sarah Johnson</p>
          <div className="flex justify-between items-center">
            <div>
              <p>8/15</p>
              <p>Modules</p>
            </div>
            <p className="text-primary text-xl font-semibold">53%</p>
          </div>
        </CardContent>
      )}

      {role === "lecturer" && (
        <CardContent>
          <div className="flex items-center gap-6">
            <p>CS101</p>
            <div className="w-2.5 h-2.5 bg-gray-500 rounded-full" />
            <p>Fall 2025</p>
          </div>
          <p className="text-lg text-gray-500 flex items-center gap-2">
            <UserRound /> <span>120 Students</span>
          </p>
        </CardContent>
      )}
      {role === "admin" && (
        <CardContent>
          <div className="flex items-center gap-6 font-medium">
            <p>CS101</p>
            <div className="w-2.5 h-2.5 bg-gray-500 rounded-full" />
            <p>Fall 2025</p>
          </div>
          <div className="font-semibold">
            <p>Department: Computer Science</p>
            <p>Lecturer: Ms. Sarah Johnson</p>
            <p>Created: 20th Jan, 2023</p>
          </div>
          <div className="flex gap-6">
            <p className="text-lg text-gray-500 flex items-center gap-1">
              <UserRound /> <span>120</span>
            </p>
            <p className="text-lg text-gray-500 flex items-center gap-1">
              <FileText /> <span>15</span>
            </p>
          </div>
        </CardContent>
      )}
      {role === "lecturer" && (
        <CardFooter>
          <Button variant="main_secondary">View</Button>
        </CardFooter>
      )}

      {role === "admin" && (
        <CardFooter className="flex gap-6">
          <Button variant="ghost" className="text-primary">
            <SquarePen />
            <span>Edit</span>
          </Button>
          <Button variant="ghost" className="text-destructive">
            <Trash />
            <span>Delete</span>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
