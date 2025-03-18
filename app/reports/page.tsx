"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ReportsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Analytics & Reports</h1>

      <Tabs defaultValue="hiring">
        <TabsList className="mb-6">
          <TabsTrigger value="hiring">Hiring Pipeline</TabsTrigger>
          <TabsTrigger value="sources">Candidate Sources</TabsTrigger>
          <TabsTrigger value="efficiency">Hiring Efficiency</TabsTrigger>
        </TabsList>

        <TabsContent value="hiring">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Hiring Pipeline Overview</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pipelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="stage" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="candidates" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="sources">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Candidate Sources</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sourcesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="source" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="candidates" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="efficiency">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Time to Hire</h3>
              <p className="text-3xl font-bold">18 days</p>
              <p className="text-sm text-muted-foreground">Average time from application to offer</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Interview Success Rate</h3>
              <p className="text-3xl font-bold">68%</p>
              <p className="text-sm text-muted-foreground">Candidates receiving offers after interview</p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

const pipelineData = [
  { stage: "Applied", candidates: 150 },
  { stage: "Screening", candidates: 80 },
  { stage: "Interview", candidates: 40 },
  { stage: "Technical", candidates: 25 },
  { stage: "Offer", candidates: 12 },
  { stage: "Hired", candidates: 8 },
];

const sourcesData = [
  { source: "LinkedIn", candidates: 45 },
  { source: "Indeed", candidates: 30 },
  { source: "Referral", candidates: 25 },
  { source: "Company Site", candidates: 20 },
  { source: "Other", candidates: 10 },
];