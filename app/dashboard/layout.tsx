"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Users,
  BarChart3,
  Settings,
  HeadphonesIcon,
  LogOut,
  Bot,
  Bell,
  HelpCircle,
  Layout,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [notifications] = useState(3);

  const navigation = [
    { icon: <Layout className="h-5 w-5" />, label: "Overview", href: "/dashboard" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "Conversations", href: "/dashboard/conversations" },
    { icon: <Bot className="h-5 w-5" />, label: "AI Training", href: "/dashboard/ai-training" },
    { icon: <Users className="h-5 w-5" />, label: "Team", href: "/dashboard/team" },
    { icon: <BarChart3 className="h-5 w-5" />, label: "Analytics", href: "/dashboard/analytics" },
    { icon: <Settings className="h-5 w-5" />, label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-950/50 border-r border-gray-800/30 backdrop-blur-sm">
        <div className="p-6">
          <Link href="/" className="flex items-center">
            <HeadphonesIcon className="h-6 w-6 text-cyan-500" />
            <span className="ml-2 text-xl font-bold text-white">CareTalk</span>
          </Link>
        </div>
        
        <nav className="mt-6">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`w-full flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-white transition-colors ${
                  isActive ? 'bg-cyan-500/10 text-white border-r-2 border-cyan-500' : ''
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-6">
          <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Navigation */}
        <header className="h-16 border-b border-gray-800/30 backdrop-blur-sm">
          <div className="h-full px-6 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-white">
              {navigation.find(item => item.href === pathname)?.label || 'Dashboard'}
            </h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-300" />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-cyan-500 rounded-full text-xs flex items-center justify-center text-white">
                    {notifications}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-5 w-5 text-gray-300" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}