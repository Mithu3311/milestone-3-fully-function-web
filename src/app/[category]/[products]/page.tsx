import ProductsComponent from "@/components/productsComponent";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

const Products = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <ProductsComponent />
          {/* Category */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="scroll-m-20 text-sm font-semibold text-myBlackPara tracking-tight">
              Stationary Items
            </h2>
            {/* Title */}
            <h1 className="mt-2 scroll-m-20 text-2xl font-bold tracking-tight mb-1 text-myBlackHead">
              Dux Pencil 999 Super
            </h1>
            {/* Ratings */}
            <div className="rating rating-sm mt-2">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
            </div>
            {/* Discription */}
            <p className="mt-2 leading-relaxed scroll-m-20 text-base font-normal text-myBlackPara">
              Introducing the Dux Pencil 999 the perfect blend of quality and
              durability.Its lead is fully bonded to the real soft wood, for a
              strong writing experience that won't break easily. Great for
              writing, sketching, and other activities, its high-grade graphite
              lead is also non-toxic and doesn't contain rainforest wood. Get
              the quality you can count on!
            </p>
            <div className="flex items-center mt-3">
              <h2 className="scroll-m-20 text-base font-semibold text-myBlackHead tracking-tight mr-3">
                Quantity
              </h2>
              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl duration-300">
                <FaMinus className="m-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Less
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                1
              </div>
              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl duration-300">
                <FaPlus className="m-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add
              </Button>
            </div>
            {/* divider */}
            <div className="divider"></div>
            {/* Price */}
            <div className="flex items-center justify-between">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              {/* Buttons div */}
              <div>
                <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl duration-300">
                  <HiShoppingCart className="m-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                  Add to Cart
                </Button>
              </div>
            </div>
            <Button className="mt-3 w-full group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl duration-300">
              <FaHeart className="m-2 h-4 w-4 group-hover:text-myOrange duration-300" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
