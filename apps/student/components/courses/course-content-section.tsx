"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import Overview from "./overview";
import Module from "./module";
import { useState } from "react";
import { courseTabs } from "@/lib/loops";

export default function CourseContentSection() {
  const [activeTab, setActiveTab] = useState(courseTabs[0]?.id);
  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {courseTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="overview">
          <Overview />
        </TabsContent>
        <TabsContent value="module">
          <Module />
        </TabsContent>
      </Tabs>
    </div>
  );
}
