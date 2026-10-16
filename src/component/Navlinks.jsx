import Link from "next/link";

import React from "react";

const Navlinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    { next: { revalidate: 10 } },
  );
  const data = await res.json();

  return (
    <div className="border-b-2 border-base-300">
      <div className="container mx-auto py-4">
        {data.map((category) => (
          <Link
            className="px-3 py-1"
            key={category.id}
            href={`/categoryDetailPage/${category.slug}`}
          >
            <span className="pr-2"> {category.icon}</span>
            <span>{category.nameBn}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navlinks;
