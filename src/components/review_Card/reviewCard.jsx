"use client";

import React from "react";
import InfiniteMovingReviews from "../ui/infinityCard";


export default function InfiniteMovingCardsDemo({reviews}) {
  return (
    (<div
      style={{ minHeight: "398px" }}
      className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingReviews items={reviews} direction="left" speed="slow" />
    </div>)
  );
}

