"use client";
import React from "react";
import { useAppSelector } from "../store/hooks";
import BestSellingCard from "@/components/bestSellingCard";

const Category = ({ params }: { params: Promise<{ category: string }> }) => {
  // Unwrap the params promise
  const { category } = React.use(params);

  const product = useAppSelector((state) => state.products);

  // Filter products by category
  const bestSell = product.filter((val) => val.category === category);

  return (
    <div className="mt-[50px] mb-[100px]">
      {/* Heading */}
      <div>
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl capitalize text-center">
          {category}
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Category Page Starts Here */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items: any, i) => (
          <BestSellingCard
            key={i}
            src={items.image?.[0] || "default-image.jpg"} // Use fallback image if undefined
            alt={items.title || "No title"}
            title={items.title}
            discription={items.discription}
            price={items.price}
            category={items.category}
            slug={items.slug}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
