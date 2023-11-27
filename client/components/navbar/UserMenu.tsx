"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-1">
        <div
          onClick={toggleOpen}
          className="p-2 md:py-1 md:px-2 border-[1px] border-neutral-200 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu size={18} />
        </div>
      </div>

      {isOpen && (
        <div
          style={{ zIndex: "9999", width: "100vw", right: "-16px" }}
          className="absolute border-t border-gray-800 shadow-md w-[40vw] md:w-[320px] bg-gray-900 overflow-hidden h-screen text-xs top-[56px]"
        >
          <div className="flex flex-col cursor-pointer">
            <MenuItem
              onClick={() => {
                router.push("/");
                setIsOpen(false);
              }}
              label="Home"
            />
            <MenuItem
              onClick={() => {
                router.push("/profile");
                setIsOpen(false);
              }}
              label="My Profile"
            />
            <div className="border-t border-gray-800" />
            <MenuItem onClick={() => {}} label="Logout" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
