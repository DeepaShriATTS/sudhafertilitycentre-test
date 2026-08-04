"use client";
import Image from "next/image";

import notfound from "../assets/404/notfound.svg"
import Button from "@/components/button";
import { FaArrowRight } from "react-icons/fa";

import { Ambattur } from "@/middleware/imagesroute";

import dynamic from "next/dynamic";
import { Homevideos } from "@/middleware/videosRoute";
import { VideoSkeletonRow } from "@/components/loaders/VideoCardSkeleton";


const GallerySlider = dynamic(
  () => import('@/components/videoCard/videoPlaylistSlider'),
  { loading: () => <VideoSkeletonRow count={3} /> }
);



export default function NotFoundPage() {
  return (
    <div>
      <div className="container mx-auto mt-[0px] ">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto text-center ">
          <Image src={notfound} alt="notfound" className="mx-auto " />

          <h2 className="font-semibold">Not found (404)</h2>
          <h3 className="text-gray-600 mt-3">Whoops.. Looks like</h3>
          <h3 className="text-gray-600 mt-2">something went wrong!</h3>
          <div className="flex justify-center mt-5">
          <Button text="Go to Home" icon={<FaArrowRight />} link="/"  />
   

          </div>
        </div>
      </div>
      <section className="mt-[70px] lg:mt-[100px] mb-[70px] lg:mb-[100px]">
        <GallerySlider items={Homevideos} />
       
      </section>
    </div>
  );
}
