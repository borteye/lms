import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { Circle, CircleCheck } from "lucide-react";

export default function Module() {
  const complete = true;
  return (
    <div>
      <Accordion type="single" collapsible>
        {[...Array(4)].map((_, i) => (
          <AccordionItem key={i} value={String(i)}>
            <AccordionTrigger>
              <div className="flex items-center gap-2 text-base">
                {complete ? (
                  <CircleCheck className="text-green-500" />
                ) : (
                  <Circle className="text-gray-400" />
                )}
                <div>
                  <p className="font-semibold">Module 1</p>
                  <div className="text-sm text-gray-600">
                    <p>
                      <span className="font-semibold text-black">Video:</span>{" "}
                      Introduction to Data
                    </p>
                    <p>6 mins</p>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
