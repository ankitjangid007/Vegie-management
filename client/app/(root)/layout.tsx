"use client";

import Navbar from "@/components/navbar/Navbar";
import { redirect } from "next/navigation";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userRole: any;
  let userId: any;
  if (typeof window !== "undefined") {
    userRole = localStorage.getItem("userRole");
    userId = localStorage.getItem("user");
  }

  if (!userId) {
    redirect("/login");
  }

  if (userRole === "admin") {
    redirect("/admin");
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      {children}
    </div>
  );
}
