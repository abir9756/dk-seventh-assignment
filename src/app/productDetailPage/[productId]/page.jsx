import { Description } from "@heroui/react";
import React from "react";

const ProductDetailPage = async ({ params }) => {
  const { productId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productId}`,
  );
  const data = await res.json();
  console.log(data);
  const minPrice = Math.min(...data.markets.map((num) => num.min));
  const maxPrice = Math.max(...data.markets.map((num) => num.max));
  return (
    <div className="container mx-auto ">
      <div className="my-6 mx-4">
        <div className="my-6 rounded-2xl flex-row justify-between items-center card bg-base-100 card-xs shadow-sm">
          <div className="flex">
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-base-200 text-3xl">
              {data.image}
            </div>
            <div className="mx-6">
              <h2 className="font-bold text-3xl">{data.nameBn}</h2>
              <Description>
                প্রতি {data.unit} · {data.categoryNameBn}
              </Description>
              <div className="text-md  flex  gap-1">
                <p>গতকালের তুলনায় আজ দাম </p>
                <span>
                  {data.change.dir === "up"
                    ? " বেড়েছে "
                    : data.change.dir === "down"
                      ? " কমেছে "
                      : ""}
                </span>
                <p>
                  ·{" "}
                  {Math.abs(data.yesterday - data.today).toLocaleString(
                    "bn-BD",
                  )}
                </p>
                <p>টাকা</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl px-5 text-center py-4 bg-base-300">
            <h4 className="text-sm">আজকের দাম</h4>
            <h2 className="font-bold text-2xl">{data.today}</h2>
            <h4 className="text-sm">টাকা / {data.unit}</h4>
            <span>
              {data.change.dir === "up" ? (
                <span className="text-success">
                  ▲{data.change.pct.toLocaleString("bn-BD")}
                </span>
              ) :data.change.dir==="flat"? (<div className="badge text-black badge-ghost">-০.০%</div>): (
                <span className="text-error">
                  ▼{data.change.pct.toLocaleString("bn-BD")}
                </span>
              )}
              %
            </span>
          </div>
        </div>

        <div className=" rounded-2xl   card bg-base-100 card-xs shadow-sm">
          <h2 className="text-xl font-semibold">দামের সারসংক্ষেপ</h2>
          <div className="grid mb-6 grid-cols-3 gap-4">
            <div className=" px-6 py-4 card rounded-2xl border border-base-300  bg-base-100">
              <h5>সর্বনিম্ন দাম</h5>
              <h2 className="font-bold  text-[#05893E]">
                <span className="text-2xl  font-bold">{minPrice}</span> টাকা
              </h2>
              <h5>সবচেয়ে কম দামের বাজার</h5>
            </div>
            <div className=" px-6 py-4 card rounded-2xl border border-base-300 bg-base-100">
              <h5>সর্বাধিক দাম</h5>
              <h2 className="font-bold text-[#D03739]">
                <span className="text-2xl  font-bold">{maxPrice}</span> টাকা
              </h2>
              <h5>সবচেয়ে বেশি দামের বাজার</h5>
            </div>
            <div className=" px-6 py-4 card rounded-2xl border border-base-300 bg-base-100">
              <h5>গড় দাম</h5>
              <h2 className="font-bold text-[#05893E]">
                <span className="text-2xl  font-bold">{data.today}</span> টাকা
              </h2>
              <h5>প্রতি {data.unit}-এর হিসাবে</h5>
            </div>
          </div>
          <h2 className="text-xl font-semibold">বাজারভিত্তিক আজকের দাম</h2>
          <div className=" rounded-2xl p-0 my-6 border border-base-300  card bg-base-100 card-xs shadow-sm">
            <div className="grid grid-cols-5 py-3 border-b-2 border-base-300  px-3">
              <h4>বাজার</h4>
              <h4>বিভাগ</h4>
              <h4>সর্বনিম্ন</h4>
              <h4>সর্বাধিক</h4>
              <h4>গড়</h4>
            </div>
            <div>
              {data.markets.map((market, indx) => (
                <div
                  key={indx}
                  className="grid grid-cols-5 py-3 px-4 border-b  border-base-400"
                >
                  <p>{market.market}</p>
                  <p>{market.division}</p>
                  <p>{market.min.toLocaleString("bn-BD")}</p>
                  <p>{market.max.toLocaleString("bn-BD")}</p>
                  <p>
                    {((market.min + market.max) / 2).toLocaleString("bn-BD")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
