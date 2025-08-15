import { User } from "lucide-react";
import { getTimeOfDay } from "@workspace/common/lib/utils";
import QuickActions from "@/components/dashboard/quick-actions";
import { quickActions } from "@/lib/loops";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">
          Good {getTimeOfDay()}, Admin
        </h1>
        <p className="font-medium text-gray-300">Dashboard Overview</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        <div className="flex flex-col bg-white border p-4 rounded-lg  gap-4">
          <div className="flex flex-col gap-2">
            <div className="bg-primary/20 p-2 rounded-full w-fit">
              <User className="text-primary" />
            </div>
            <h3 className="font-medium text-lg">Total students</h3>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            1207
          </h1>
        </div>
        <div className="flex flex-col bg-white border p-4 rounded-lg  gap-4">
          <div className="flex flex-col gap-2">
            <div className="bg-primary/20 p-2 rounded-full w-fit">
              <User className="text-primary" />
            </div>
            <h3 className="font-medium text-lg">Total students</h3>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            1207
          </h1>
        </div>
        <div className="flex flex-col bg-white border p-4 rounded-lg  gap-4">
          <div className="flex flex-col gap-2">
            <div className="bg-primary/20 p-2 rounded-full w-fit">
              <User className="text-primary" />
            </div>
            <h3 className="font-medium text-lg">Total students</h3>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            1207
          </h1>
        </div>
      </div>
      <div className="mt-12 p-4 bg-black/0.5 border rounded-lg">
        <h1 className="text-xl font-semibold">Quick Actions</h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action, i) => (
            <Link key={i} href={action.link}>
              <QuickActions key={action.title} {...action} />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-xl font-semibold">Recent Activities</h1>
        <div className="mt-4">
          <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-4 rounded-lg">
            <h1 className="text-xl font-medium">
              John Addison submitted an assignment
            </h1>
            <p>5 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
