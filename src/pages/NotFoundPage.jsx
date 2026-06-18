"use client";
import Image from "next/image";
import Link from "next/link";
import notfound from "../assets/404/notfound.svg"
import Button from "@/components/button";
import { FaArrowRight } from "react-icons/fa";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur } from "@/middleware/imagesroute";
import Buttonbottm from "@/components/button";

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

                {/* MarqueeComponent */}
   

          </div>
        </div>
      </div>
      <section className="mt-[70px] lg:mt-[100px] mb-[70px] lg:mb-[100px]">
        {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
        <MarqueeComponent
          items={Ambattur.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
          <h2 className=" font-bold text-center ">
            Childless Couples to Happy Parents
          </h2>
          <Buttonbottm text="Watch on Youtube " link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Ambattur.gallery}
          direction="right"
          speed="fast"
          className="custom-class"
        /> */}
        {/* </div>
          </div> */}
      </section>
    </div>
  );
}
