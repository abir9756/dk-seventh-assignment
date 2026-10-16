import SortBy from "@/component/SortBy";
import { Description } from "@heroui/react";
import React from "react";

const CategoryDetailPage = async ({ params }) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,{next:{revalidate:10}},
  );
  const data = await res.json();
  
  return (
    <div className="container mx-auto">
      <div className="py-6 px-4">
        <div className="p-5 mb-6 flex-row items-center gap-1 card   bg-base-100 card-xs shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl  text-3xl">
            {data[0].image}
          </div>
          <div>
            <h2 className="font-bold text-2xl">{data[0].categoryNameBn}</h2>
            <Description>
              {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও
              পরিবর্তন
            </Description>
          </div>
        </div>
        <div>
         
          <SortBy data={data}></SortBy>
        </div>
       
      </div>
    </div>
  );
};

export default CategoryDetailPage;
