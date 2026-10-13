import Image from "next/image";
import React from "react";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <header>
      <div className=" border-b border-base-300">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          <div className="flex gap-2">
            <Image
              className="bg-green-600 rounded-2xl"
              src={"/logo-icon.png"}
              alt="logo"
              height={50}
              width={50}
            />
            <div>
              <h1 className="font-bold text-2xl">বাজার দর</h1>
              <p>{date}</p>
            </div>
          </div>
          <div>
            <button className="btn border-none font-semibold ">সাইন ইন</button>
            <button className="btn bg-[#05893E] text-white font-semibold rounded-xl">
              সাইন আপ
            </button>
          </div>
        </div>
      </div>
      <div>
        <Navlinks></Navlinks>
      </div>
    </header>
  );
};

export default Navbar;
