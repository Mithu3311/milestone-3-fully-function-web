import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";



const BestSellingCard = (
    {
        src, 
        alt, 
        title, 
        discription,
        price}
    :{
        src: string, 
        alt: string, 
        title: string, 
        discription: string, 
        price: number
    }) => {
  return (
    <div className="w-[350px] h-[35rem] p-4 mx-auto shadow-lg rounded-xl relative group">
        <div className="block h-[23rem] rounded overflow-hidden">
          <Image
            src={src}
            width={400}
            height={400}
            alt={alt}
          />
        </div>
        <div className="mt-4">
          {title && (
            <h2 className="scroll-m-20 border-b text-lg font-semibold tracking-tight first:mt-0 text-myBlackHead line-clamp-1">
            {title}
          </h2>
          )}
          {discription && (
            <p className="mt-2 scroll-m-20 pt-2 text-sm font-semibold tracking-tight text-myBlackPara line-clamp-1">
            {discription}
          </p>
          )}
          {price && (
            <p className="mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead line-clamp-1">
            Rs.{price} PKR
          </p>
          )}
        </div>
        <div>
          <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 right-2 duration-300">
            <HiShoppingCart className="m-2 h-4 w-4 group-hover:text-myOrange duration-300" />
            Add to Cart
          </Button>
          <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2 duration-300">
            <FaHeart className="m-2 h-4 w-4 group-hover:text-myOrange duration-300" />
            Buy Now
          </Button>
        </div>
      </div>
  )
}

export default BestSellingCard
