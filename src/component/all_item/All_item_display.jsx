import React from "react";
import { Link } from "react-router";

const All_item_display = ({ data }) => {
  return (
    <div>
      <Link to={`/itemCard/${data.id}`}>
        <div className="border-2 rounded-2xl p-3 border-amber-200 bg-gray-100">
          <img
            className="rounded-2xl h-50 mx-auto w-60"
            src={data.image}
            alt=""
          />
          <h1 className="text-center p-2 text-2xl font-semi-bold">
            {data.category}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default All_item_display;
