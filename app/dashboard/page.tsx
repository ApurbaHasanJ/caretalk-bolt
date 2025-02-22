"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquareIcon, 
  Users, 
  BarChart3Icon, 
  Settings, 
  RocketIcon,
  LogOut
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const [activeChats] = useState(5);
  const [resolvedToday] = useState(23);
  const [aiAccuracy] = useState(95);

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-purple-950/50 border-r border-purple-800/30 backdrop-blur-sm">
        <div className="p-6">
          <Link href="/" className="flex items-center">
            <RocketIcon className="h-6 w-6 text-purple-400" />
            <span className="ml-2 text-xl font-bold text-white">NexusAI</span>
          </Link>
        </div>
        
        <nav className="mt-6">
          {[
            { icon: <MessageSquareIcon className="h-5 w-5" />, label: "Conversations" },
            { icon: <Users className="h-5 w-5" />, label: "Team" },
            { icon: <BarChart3Icon className="h-5 w-5" />, label: "Analytics" },
            { icon: <Settings className="h-5 w-5" />, label: "Settings" },
          ].map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center space-x-3 px-6 py-3 text-purple-200 hover:bg-purple-800/20 hover:text-white transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6">
          <Button variant="ghost" className="w-full justify-start text-purple-200 hover:text-white">
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-purple-100 mb-8">Dashboard</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { 
                title: "Active Chats",
                value: activeChats,
                icon: <MessageSquareIcon className="h-5 w-5 text-purple-400" />
              },
              {
                title: "Resolved Today",
                value: resolvedToday,
                icon: <Users className="h-5 w-5 text-purple-400" />
              },
              {
                title: "AI Accuracy",
                value: `${aiAccuracy}%`,
                icon: <BarChart3Icon className="h-5 w-5 text-purple-400" />
              }
            ].map((stat, index) => (
              <Card key={index} className="bg-purple-900/20 border-purple-800/30">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-200">
                    {stat.title}
                  </CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-100">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <Card className="bg-purple-900/20 border-purple-800/30">
            <CardHeader>
              <CardTitle className="text-purple-100">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    user: "Sarah Thompson",
                    action: "resolved a ticket",
                    time: "2 minutes ago"
                  },
                  {
                    user: "AI Assistant",
                    action: "suggested a solution",
                    time: "5 minutes ago"
                  },
                  {
                    user: "Mike Chen",
                    action: "assigned a ticket",
                    time: "10 minutes ago"
                  }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-purple-200">
                        <strong>{activity.user}</strong> {activity.action}
                      </span>
                    </div>
                    <span className="text-purple-400 text-sm">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}