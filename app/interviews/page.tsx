"use client";

import { Calendar as CalendarIcon, Clock, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function InterviewsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Interview Schedule</h1>
      
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="col-span-1 p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </Card>

        <div className="lg:col-span-2">
          <div className="space-y-4">
            {interviews.map((interview, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{interview.candidate}</h3>
                    <p className="text-sm text-muted-foreground">{interview.position}</p>
                    <div className="mt-2 flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{interview.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{interview.interviewer}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" onClick={() => {}}>Add Feedback</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const interviews = [
  {
    candidate: "Sarah Johnson",
    position: "Senior Developer",
    time: "2:00 PM - 3:00 PM",
    interviewer: "Alex Thompson"
  },
  {
    candidate: "David Wilson",
    position: "Frontend Developer",
    time: "3:30 PM - 4:30 PM",
    interviewer: "Rachel Martinez"
  }
];