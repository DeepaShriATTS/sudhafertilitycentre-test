"use client";

import React from "react";
import InfiniteMovingReviews from "../ui/infinityCard";


export function InfiniteMovingCardsDemo({reviews}) {
  return (
    (<div
      className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingReviews items={reviews} direction="left" speed="slow" />
    </div>)
  );
}

