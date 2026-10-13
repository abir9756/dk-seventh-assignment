import Image from "next/image";
import React from "react";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="container mx-auto">
      <div className="my-10 px-4 rounded-3xl border border-base-300 flex justify-between bg-white items-center">
        <div>
          <p className="text-[#05893E] inline rounded-4xl py-3 px-1  bg-green-100">{date}</p>
          <p className="font-bold text-5xl my-8">আজকের বাজারের দাম এক নজরে</p>
          <p className="my-2">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-<br></br>সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
          <button className="btn font-semibold mt-2 rounded-xl text-white bg-[#047F39]">সব পণ্য দেখুন</button>
        </div>
        <Image
        src={'/bazar-hero.png'}
        alt="banner"
        height={600}
        width={400}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
