"use client";

import Navbar from "@/components/navbar/Navbar";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      {children}
    </div>
  );
}
