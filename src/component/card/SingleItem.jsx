import React from "react";

const SingleItem = ({ img, i }) => {
  return (
    <div>
      <img className="w-50 flex gap-2" key={i} src={img} alt="" />
    </div>
  );
};

export default SingleItem;
