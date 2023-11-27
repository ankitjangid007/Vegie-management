"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const path = usePathname();

  const isAdmin = path.startsWith("/admin");

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="w-full bg-gray-900 text-white shadow-sm">
      <div className=" flex py-2 border-b-[1px] justify-between items-center">
        <div className="flex flex-row items-center justify-between gap-2 md:gap-0">
          <Logo />
        </div>
        <div className="md:hidden px-4">
          <UserMenu />
        </div>
        <div className="hidden md:flex">
          <MenuItem
            onClick={() => {
              if (isAdmin) {
                router.push("/admin");
              } else {
                router.push("/");
              }
              setIsOpen(false);
            }}
            label="Home"
          />
          {isAdmin ? (
            <MenuItem
              onClick={() => {
                router.push("/admin/add-vegetable");
                setIsOpen(false);
              }}
              label="Add Vegetables"
            />
          ) : null}
          <MenuItem
            onClick={() => {
              if (isAdmin) {
                router.push("/admin/profile");
              } else {
                router.push("/profile");
              }
              setIsOpen(false);
            }}
            label="My Profile"
          />
          <MenuItem onClick={handleLogout} label="Logout" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
