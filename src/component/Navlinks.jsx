import React from "react";
import ActiveCategory from "./ActiveCategory";

const Navlinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    { next: { revalidate: 10 } },
  );
  const data = await res.json();

  return (
    <div className="border-b-2 border-base-300">
      <div className="container mx-auto grid grid-cols-4 md:flex py-4">
        {data.map((category) => (
          <ActiveCategory
            key={category.id}
            category={category}
          ></ActiveCategory>
        ))}
      </div>
    </div>
  );
};

export default Navlinks;
