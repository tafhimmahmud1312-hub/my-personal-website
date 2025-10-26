import React from "react";
import bed from "../../../public/image/bed.jpg";
import cabinet from "../../../public/image/cabinet.jpg";
const Categories = () => {
  return (
    <div className="grid grid-cols-2">
      <section className=" mx-auto">
        <img className="w-40 rounded-t-2xl" src={bed} alt="" />
        <h1 className="w-40 text-center rounded-b-2xl bg-amber-200 font-bold p-1">
          bed
        </h1>
      </section>
      <section>
        <img className="w-40 rounded-t-2xl" src={cabinet} alt="" />
        <h1 className="w-40 rounded-b-2xl text-center bg-amber-200 font-bold px-1">
          Bed Cabinet
        </h1>
      </section>
    </div>
  );
};

export default Categories;
