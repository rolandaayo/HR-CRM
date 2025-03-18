"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { Users, LayoutDashboard, UserPlus, Calendar, PieChart, Settings, Bell, Sun, Moon } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [notifications] = useState([
    { id: 1, title: "New candidate application", time: "5m ago" },
    { id: 2, title: "Interview scheduled", time: "1h ago" },
  ]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-background">
          {/* Sidebar */}
          <aside className="w-64 border-r border-border bg-card/50 backdrop-blur-sm flex flex-col">
            <div className="p-6 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">HR CRM</h1>
                  <p className="text-xs text-muted-foreground">Recruitment Management</p>
                </div>
              </div>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              <Link 
                href="/" 
                className={`sidebar-link ${pathname === '/' ? 'active' : ''}`}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link 
                href="/candidates" 
                className={`sidebar-link ${pathname === '/candidates' ? 'active' : ''}`}
              >
                <UserPlus className="h-5 w-5" />
                <span>Candidates</span>
              </Link>
              <Link 
                href="/interviews" 
                className={`sidebar-link ${pathname === '/interviews' ? 'active' : ''}`}
              >
                <Calendar className="h-5 w-5" />
                <span>Interviews</span>
              </Link>
              <Link 
                href="/reports" 
                className={`sidebar-link ${pathname === '/reports' ? 'active' : ''}`}
              >
                <PieChart className="h-5 w-5" />
                <span>Reports</span>
              </Link>
            </nav>
            <div className="p-4 border-t border-border">
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <Settings className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative hover:bg-primary/20">
                  <Bell className="h-5 w-5" />
                  {notifications.length > 0 && (
                    <span className="notification-dot" />
                  )}
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium">JD</span>
                  </div>
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-auto bg-background scrollbar-custom">
            <div className="min-h-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}