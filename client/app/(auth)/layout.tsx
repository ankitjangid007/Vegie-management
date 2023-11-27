"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  return (
    <div className="lg:w-screen lg:h-screen flex items-center rounded-md">
      <div className="lg:mt-12 mt-7 flex border w-[95vw] lg:w-[70vw] mx-auto rounded-md h-[60vh]">
        <div className="hidden gap-10 lg:flex flex-col border-r lg:w-1/2 bg-gradient-to-r from-green-700 to-green-950 text-white rounded-tl-md rounded-bl-md">
          <div className="flex justify-center w-full p-12">
            <Image src="/images/logo.png" alt="" width="400" height="500" />
          </div>
          {path === "/login" ? (
            <span className="text-center">
              Don't have an account?{" "}
              <Link href="/register" className="text-green-500 underline">
                Register
              </Link>
            </span>
          ) : (
            <span className="text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-green-500 underline">
                Login
              </Link>
            </span>
          )}
        </div>

        <div className="mx-auto text-center m-auto p-6 w-full lg:w-1/2">
          <div className="lg:hidden flex justify-center">
            <Image src="/images/logo.png" alt="" width="600" height="300" />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
