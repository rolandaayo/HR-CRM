"use client";

import { CircleUser, Users, Calendar, FileText, TrendingUp, UserCheck, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, John</h1>
            <p className="text-muted-foreground">Here's what's happening in your recruitment pipeline</p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <UserCheck className="mr-2 h-4 w-4" />
            Post New Job
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="dashboard-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Candidates</p>
                <h3 className="text-2xl font-bold mt-1">248</h3>
                <p className="text-sm text-green-600 mt-1">↑ 12% from last month</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <CircleUser className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Upcoming Interviews</p>
                <h3 className="text-2xl font-bold mt-1">12</h3>
                <p className="text-sm text-muted-foreground mt-1">Next: Today at 2 PM</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Time to Hire</p>
                <h3 className="text-2xl font-bold mt-1">18 days</h3>
                <p className="text-sm text-green-600 mt-1">↓ 3 days improvement</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Candidates */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Candidates</h2>
              <Button variant="ghost" className="text-sm text-muted-foreground">View all</Button>
            </div>
            
            <div className="space-y-4">
              {recentCandidates.map((candidate, index) => (
                <div key={index} className="candidate-card">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">
                        {candidate.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{candidate.name}</h3>
                        <span className={`status-badge ${candidate.status.toLowerCase().replace(" ", "-")}`}>
                          {candidate.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{candidate.position}</p>
                      <div className="mt-2">
                        <div className="match-score">
                          <span>Match Score</span>
                          <div className="flex-1 match-score-bar">
                            <div 
                              className="match-score-fill" 
                              style={{ width: `${candidate.matchScore}%` }}
                            />
                          </div>
                          <span>{candidate.matchScore}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Interviews */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Upcoming Interviews</h2>
              <Button variant="ghost" className="text-sm text-muted-foreground">View schedule</Button>
            </div>
            
            <div className="space-y-4">
              {upcomingInterviews.map((interview, index) => (
                <div key={index} className="interview-card">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{interview.candidate}</h3>
                        <span className="text-sm text-muted-foreground">{interview.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{interview.position}</p>
                      <div className="mt-2 flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{interview.interviewer}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Hiring Pipeline Progress</h3>
              {pipelineStages.map((stage, index) => (
                <div key={index} className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>{stage.name}</span>
                    <span className="text-muted-foreground">{stage.count} candidates</span>
                  </div>
                  <Progress value={stage.progress} className="h-2" />
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

const recentCandidates = [
  {
    name: "Sarah Johnson",
    position: "Senior Developer",
    status: "Interview Scheduled",
    matchScore: 95,
  },
  {
    name: "Michael Chen",
    position: "Product Manager",
    status: "In Review",
    matchScore: 88,
  },
  {
    name: "Emily Davis",
    position: "UX Designer",
    status: "New",
    matchScore: 92,
  }
];

const upcomingInterviews = [
  {
    candidate: "Sarah Johnson",
    position: "Senior Developer",
    time: "Today at 2:00 PM",
    interviewer: "Alex Thompson, Tech Lead"
  },
  {
    candidate: "David Wilson",
    position: "Frontend Developer",
    time: "Tomorrow at 11:00 AM",
    interviewer: "Rachel Martinez, Engineering Manager"
  }
];

const pipelineStages = [
  { name: "Applied", count: 150, progress: 100 },
  { name: "Screening", count: 80, progress: 53 },
  { name: "Interview", count: 40, progress: 27 },
  { name: "Offer", count: 12, progress: 8 },
];