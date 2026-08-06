import React from "react";
import InfiniteMovingReviews from "../ui/infinityCard";
import { reviews } from "../../utils/homepageData";


export default function InfiniteMovingCardsDemo() {
  return (
    (<div
      style={{ minHeight: "398px" }}
      className="branch-reviews-wrapper rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
       
      <InfiniteMovingReviews items={reviews} direction="left" />
    </div>)
  );
}

