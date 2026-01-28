import BreadCrumb from "@workspace/common/components/bread-crumb";
import { Separator } from "@workspace/ui/components/separator";
import Image from "next/image";

export default function MessageDetails() {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <BreadCrumb
        prevHref="/messages"
        prevLabel="Messages"
        title="Assignment Submission"
      />

      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12">
          <Image
            className="rounded-full"
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
        </div>
        <div>
          <p className="font-semibold">Prof. Sarah Johnson</p>
          <p className="text-sm text-gray-500">CS301: Data Structures</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Reminder: Assignment Submission</h1>
        <p className="text-sm font-medium">CS301: Data Structures</p>
      </div>
      <Separator />
      <div className="prose max-w-none">
        <p>
          This is a reminder that your final project for CS301 is due this
          Friday at 11:59 PM. Please ensure you submit all required files
          through the course portal.
        </p>
        <p>The submission should include:</p>
        <ul>
          <li>Project source code</li>
          <li>Documentation (PDF format)</li>
          <li>Presentation slides</li>
        </ul>
        <p>
          Late submissions will incur a 10% penalty per day. If you have any
          questions, please reach out as soon as possible.
        </p>
        <p>
          Best regards,
          <br />
          Prof. Sarah Johnson
        </p>
      </div>
    </div>
  );
}
