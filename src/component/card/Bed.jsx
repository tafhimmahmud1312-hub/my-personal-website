import React, { Suspense } from "react";
import { useLoaderData, useParams } from "react-router";
import SingleItem from "./SingleItem";

const Bed = () => {
  const dataloader = useLoaderData();

  const { id } = useParams();
  const parseid = parseInt(id);
  const finddata = dataloader.find((data) => data.id === parseid);
  if (!finddata) {
    return <p>Item not found.</p>;
  }

  const { images } = finddata;
  return (
    <div>
      <h1>{finddata.id}</h1>

      {images.map((img) => (
        <SingleItem img={img}></SingleItem>
      ))}
    </div>
  );
};

export default Bed;
