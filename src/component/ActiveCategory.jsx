"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ActiveCategory = ({ category }) => {
  const pathname = usePathname();
    const link = `/categoryDetailPage/${category.slug}`;
  const isActive = pathname === link;
  return (
    <div >
      <Link className={`px-3 py-1 ${isActive? "rounded-xl bg-[#047F39] text-white":""}`}  href={link}
      
      >
        <span className="pr-2"> {category.icon}</span>
        <span>{category.nameBn}</span>
      </Link>
    </div>
  );
};

export default ActiveCategory;
