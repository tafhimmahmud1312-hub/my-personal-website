import React from "react";

const Door = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('door-img.jpg')" }}
        className="border-2 w-60 h-60 border-amber-300 p-4 bg-cover"
      ></div>
      <h1 className="bg-amber-400 font-semibold text-2xl ">door</h1>
    </div>
  );
};

export default Door;
