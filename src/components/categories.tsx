import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Categories Starts from Here */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-2">
        {/* Category 1 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/stationary"}>
            <Image
              src={"/pictures/Category-1.avif"}
              alt="Stationary"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Stationary</h1>
            </div>

            <div className="block lg:hidden absolute bottom-5 duration-500 z-[100]scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Stationary</h1>
            </div>
          </Link>
        </div>

        {/* Category 2 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/sports"}>
            <Image
              src={"/pictures/Category-2.webp"}
              alt="Sports"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Sports</h1>
            </div>

            <div className="block lg:hidden absolute bottom-5 duration-500 z-[100]scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Sports</h1>
            </div>
          </Link>
        </div>

        {/* Category 3 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/electronics"}>
            <Image
              src={"/pictures/Category-3.jpg"}
              alt="Electronic"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Electronics</h1>
            </div>

            <div className="block lg:hidden absolute bottom-5 duration-500 z-[100]scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Electronics</h1>
            </div>
          </Link>
        </div>

        {/* Category 4 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/photoStudio"}>
            <Image
              src={"/pictures/Category-4.png"}
              alt="Photo Studio"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Photo Studio</h1>
            </div>

            <div className="block lg:hidden absolute bottom-5 duration-500 z-[100]scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Photo Studio</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
