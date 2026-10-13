import Image from "next/image";
import React from "react";

const PriceSection = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  const upData = data
    .filter((product) => product.change?.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const downData = data
    .filter((product) => product.change?.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div className="container mx-auto">
      <div>
        <div className="flex mb-5">
          <p className="text-error pr-1">▲</p>
          <h3 className="font-bold"> আজ দাম বেড়েছে</h3>
        </div>
        <div className="grid grid-cols-3 gap-5 mb-10">
          {upData.map((Data) => (
            <div key={Data.id}>
              <div className="card  bg-base-100 card-xs shadow-sm">
                <div className="card-body">
                  <div className="flex">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-200 text-3xl">
                        {Data.image}
                      </div>

                      <div>
                        <h2 className="card-title">{Data.nameBn}</h2>
                        <p>প্রতি কেজি</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p>আজকের দাম</p>
                      <div className="flex items-center gap-1">
                        <h3 className="font-bold text-xl">{Data.today.toLocaleString("bn-BD")} </h3>
                        <p>টাকা</p>
                      </div>
                    </div>
                    <div className="badge text-error badge-ghost">
                      ▲{Data.change.pct.toLocaleString("bn-BD")}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex mb-5">
          <p className="text-success pr-1">▼</p>
          <h3 className="font-bold"> আজ দাম কমেছে</h3>
        </div>
        <div className="grid grid-cols-3 gap-5 mb-10">
          {downData.map((Data) => (
            <div key={Data.id}>
              <div className="card  bg-base-100 card-xs shadow-sm">
                <div className="card-body">
                  <div className="flex">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-200 text-3xl">
                        {Data.image}
                      </div>

                      <div>
                        <h2 className="card-title">{Data.nameBn}</h2>
                        <p>প্রতি কেজি</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p>আজকের দাম</p>
                      <div className="flex items-center gap-1">
                        <h3 className="font-bold text-xl">{Data.today.toLocaleString("bn-BD")} </h3>
                        <p>টাকা</p>
                      </div>
                    </div>
                    <div className="badge text-error badge-ghost">
                      ▲{Data.change.pct.toLocaleString("bn-BD")}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className=" mb-5">
          <h3 className="font-bold">সব পণ্য</h3>
          <p>মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
        </div>
        <div className="grid grid-cols-3 gap-5 mb-10">
          {data.map((Data) => (
            <div key={Data.id}>
              <div className="card  bg-base-100 card-xs shadow-sm">
                <div className="card-body">
                  <div className="flex">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-200 text-3xl">
                        {Data.image}
                      </div>

                      <div>
                        <h2 className="card-title">{Data.nameBn}</h2>
                        <p>প্রতি কেজি</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p>আজকের দাম</p>
                      <div className="flex items-center gap-1">
                        <h3 className="font-bold text-xl">{Data.today.toLocaleString("bn-BD")} </h3>
                        <p>টাকা</p>
                      </div>
                    </div>
                    <div className="badge text-error badge-ghost">
                      ▲{Data.change.pct.toLocaleString("bn-BD")}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
