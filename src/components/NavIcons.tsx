"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavIcons = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 items-center">
      <Link href="/cart">
        <div className="relative">
          <Image src="/cart.png" alt="" width={28} height={28} />
        </div>
      </Link>
      <Link href="/profile">
        <Image src="/user.png" alt="" width={28} height={28} />
      </Link>
    </div>
  );
};

export default NavIcons;
