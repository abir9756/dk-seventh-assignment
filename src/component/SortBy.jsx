"use client";
import { Description } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";

const SortBy = ({ data }) => {
  const [sortBy, setSortBy] = useState("কম থেকে বেশি");
  const sortCategory = (category) => {
    return [...category].sort((a, b) => {
      if (sortBy === "কম থেকে বেশি") {
        return a.today - b.today;
      }
      if (sortBy === "বেশি থেকে কম") {
        return b.today - a.today;
      }
    });
  };
  const sortedData = sortCategory(data);
  return (
    <div>
      <div className="p-4 card mb-4  bg-base-100  shadow-sm flex-row items-center md:justify-end justify-center">
        <Description className="">সাজান</Description>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select w-40 h-8 flex justify-center items-center rounded-xl"
        >
          <option>ডিফল্ট</option>
          <option value={"কম থেকে বেশি"}>কম থেকে বেশি</option>
          <option value={"বেশি থেকে কম"}>বেশি থেকে কম</option>
        </select>
      </div>
      <Description className="flex justify-center md:justify-start">
        মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
      </Description>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-10  mt-4">
        {sortedData.map((Data) => (
          <Link href={`/productDetailPage/${Data.id}`} key={Data.id}>
            <div>
              <div className="card  bg-base-100 card-xs shadow-sm">
                <div className="card-body">
                  <div className="flex">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-200 text-3xl">
                        {Data.image}
                      </div>

                      <div>
                        <h2 className="card-title">{Data.nameBn}</h2>
                        <p>
                          {" "}
                          প্রতি {Data.unit} · {Data.categoryNameBn}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p>আজকের দাম</p>
                      <div className="flex items-center gap-1">
                        <h3 className="font-bold text-xl">
                          {Data.today.toLocaleString("bn-BD")}{" "}
                        </h3>
                        <p>টাকা</p>
                      </div>
                    </div>
                    <div>
                      {Data.change.dir === "up" ? (
                        <div className="badge text-error badge-ghost">
                          ▲{Math.abs(Data.change.pct).toLocaleString("bn-BD")}%
                        </div>
                      ) : Data.change.dir === "flat" ? (
                        <div className="badge text-black badge-ghost">
                          -০.০%
                        </div>
                      ) : (
                        <div className="badge text-[#1A9951] badge-ghost">
                          ▼{Math.abs(Data.change.pct).toLocaleString("bn-BD")}%
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SortBy;
