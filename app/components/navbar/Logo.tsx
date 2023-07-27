"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      src="/images/logo.png"
      alt="Logo"
      className="hidden md:block cursor-pointer w-auto h-auto"
      width="100"
      height="100"
      priority={true}
    />
  );
};

export default Logo;
