import { Button } from "@workspace/ui/components/button";
import { BadgeCheck, CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <div className="flex justify-center items-center flex-col text-center gap-6">
      <BadgeCheck className="text-green-400" size={62} />
      <div>
        <h1 className="text-2xl font-semibold">Congratulations!</h1>
        <p className="text-lg">Your school has been added successfully</p>
      </div>

      <Button>Continue</Button>
    </div>
  );
}
