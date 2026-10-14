import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
 
  return (
    <div className=" border-b-2 border-base-300">
      <div>
        <MarqueeText>
          {data.map((category) => (
            <div key={category.id} className=" flex gap-1.5 py-2 px-4 border-r border-base-300">
              <span className=" flex gap-1.5">
                <span>{category.image}</span>
                {category.nameBn}
                <span>{category.today.toLocaleString("bn-BD")}</span>টাকা/{category.unit}{" "}
                {category.change.dir === "up" ? (
                  <span className="text-success">▲{category.change.pct.toLocaleString("bn-BD")}</span>
                ) : (
                  <span className="text-error">▼{category.change.pct.toLocaleString("bn-BD")}</span>
                )}
                %
              </span>
              <span></span>
              <p></p>
              <span></span>
            </div>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
