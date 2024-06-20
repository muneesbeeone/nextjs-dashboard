"use client"
import { useState } from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';
import Header from '@/app/ui/dashboard/header';
export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex h-screen bg-[#F4F7FE]">
      <SideNav isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F4F7FE]">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
};
