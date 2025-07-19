import {
  Table,
  TableBody, TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@workspace/ui/components/table";
import { BookOpen, ChartLine, GraduationCap } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

const gradesData = [
  {
    title: "This Semester",
    grades: [
      {
        course: "Data Structures",
        code: "CS 201",
        instructor: "Dr. Ada Lovelace",
        grade: "A",
        gradePoint: "96%",
      },
      {
        course: "Microeconomics",
        code: "ECON 101",
        instructor: "Dr. Adam Smith",
        grade: "B+",
        gradePoint: "96%",
      },
      {
        course: "Introduction to Computer Science",
        code: "CS 101",
        instructor: "Dr. Alan Turing",
        grade: "B+",
        gradePoint: "96%",
      },
      {
        course: "Psychology",
        code: "PSY 101",
        instructor: "Dr. Carl Jung",
        grade: "C+",
        gradePoint: "96%",
      },
      {
        course: "Linear Algebra",
        code: "MATH 230",
        instructor: "Dr. Emmy Noether",
        grade: "C+",
        gradePoint: "96%",
      },
      {
        course: "Microeconomics",
        code: "ECON 101",
        instructor: "Dr. Katherine Johnson",
        grade: "D",
        gradePoint: "96%",
      },
      {
        course: "Calculus I",
        code: "MATH 120",
        instructor: "Dr. Marie Curie",
        grade: "D",
        gradePoint: "96%",
      },
      {
        course: "Organic Chemistry",
        code: "CHEM 240",
        instructor: "Dr. Richard Feynman",
        grade: "D",
        gradePoint: "96%",
      },
    ],
  },
  {
    title: "1st Semester",
    grades: [
      {
        course: "Data Structures",
        code: "CS 201",
        instructor: "Dr. Ada Lovelace",
        grade: "A",
        gradePoint: "96%",
      },
      {
        course: "Microeconomics",
        code: "ECON 101",
        instructor: "Dr. Adam Smith",
        grade: "B+",
        gradePoint: "96%",
      },
      {
        course: "Introduction to Computer Science",
        code: "CS 101",
        instructor: "Dr. Alan Turing",
        grade: "B+",
        gradePoint: "96%",
      },
      {
        course: "Psychology",
        code: "PSY 101",
        instructor: "Dr. Carl Jung",
        grade: "C+",
        gradePoint: "96%",
      },
      {
        course: "Linear Algebra",
        code: "MATH 230",
        instructor: "Dr. Emmy Noether",
        grade: "C+",
        gradePoint: "96%",
      },
      {
        course: "Microeconomics",
        code: "ECON 101",
        instructor: "Dr. Katherine Johnson",
        grade: "D",
        gradePoint: "96%",
      },
    ],
  },
];

export default function GradePage() {
  return (
    <div>
      {/* <PageEmptyState /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border p-4 rounded-lg flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
              <ChartLine />
            </div>
            Upcoming Deadlines
          </div>
          <h1 className="text-4xl font-semibold text-center">2</h1>
          <p className="text-gray-500">Remember to Submit them on time</p>
        </div>
        <div className="bg-white border p-4 rounded-lg flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
              <BookOpen />
            </div>
            Upcoming Deadlines
          </div>
          <h1 className="text-4xl font-semibold text-center">2</h1>
          <p className="text-gray-500">Remember to Submit them on time</p>
        </div>
        <div className="bg-white border p-4 rounded-lg flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
              <GraduationCap />
            </div>
            Upcoming Deadlines
          </div>
          <h1 className="text-4xl font-semibold text-center">2</h1>
          <p className="text-gray-500">Remember to Submit them on time</p>
        </div>
      </div>
      {/* Table*/}
      {gradesData.map((semester) => (
        <div key={semester.title} className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">{semester.title}</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                <TableHead>COURSE</TableHead>
                <TableHead>INSTRUCTOR</TableHead>
                <TableHead>GRADE</TableHead>
                <TableHead>GRADE POINT</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {semester.grades.map((grade, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="font-medium">{grade.course}</div>
                    <div className="text-sm text-gray-500">{grade.code}</div>
                  </TableCell>
                  <TableCell>{grade.instructor}</TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "inline-block px-2 py-1 text-xs font-semibold rounded-full",
                        grade.grade.startsWith("A")
                          ? "bg-green-100 text-green-800"
                          : grade.grade.startsWith("B")
                            ? "bg-blue-100 text-blue-800"
                            : grade.grade.startsWith("C")
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                      )}
                    >
                      {grade.grade}
                    </span>
                  </TableCell>
                  <TableCell>{grade.gradePoint}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </div>
      ))}
    </div>
  );
}
