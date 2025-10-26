import React, { Suspense } from "react";

import Bed from "../component/card/Bed";
import { useLoaderData } from "react-router";
import All_item_display from "../component/all_item/All_item_display";

const Home = () => {
  const allItem = useLoaderData();

  return (
    <div>
      <h1 className="font-bold my-2 text-xl">Our Top Categories</h1>
      <div className=" lg:grid-cols-4 grid grid-cols-2 gap-2 mt-3 mx-auto">
        <Suspense fallback={<p>loading....</p>}>
          {allItem.map((data) => (
            <All_item_display key={data.id} data={data}></All_item_display>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
