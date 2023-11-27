"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      src="/images/logo.png"
      alt="logo"
      className="cursor-pointer"
      height={50}
      width={60}
    />
  );
};

export default Logo;
