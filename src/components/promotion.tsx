import React from "react";

const Promotion = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Promotions
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* Promotions Start Here */}

      <div>
        {/* 1st Child */}
        <div
          className="hero h-[25rem] promo-1"
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase">Get upto 60% off</h1>
              <p className="mb-5">
                Flash Sale, get upto 60% off on the Variant 
              </p>
            </div>
          </div>
        </div>

        {/* 2nd Child */}

      </div>
    </div>
  );
};

export default Promotion;
