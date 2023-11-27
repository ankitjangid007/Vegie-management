import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <p className="text-2xl mb-4">Page not found!</p>
      <div className="h-[100px]">
        <Link
          href="/"
          className="border p-2 border-r-4 border-b-4 hover:bg-slate-200 hover:border-r-0 hover:border-b-0"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
