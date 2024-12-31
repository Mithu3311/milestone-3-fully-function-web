"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCard from "./bestSellingCard";

const FeatureProduct = () => {
  // myData
  const bestSell = [
    {
      src: "/pictures/duxpencil1.jpg",
      alt: "Dux pencil",
      title: "Dux Pencil 999 Super",
      discription:
        "Introducing the Dux Pencil 999 the perfect blend of quality and durability.",
      price: 270,
      category: "stationary",
      products: "dux pencil",
    },
    {
      src: "/pictures/royalcopy.jpg",
      alt: "Royal Metso",
      title: "Royal Metso Note Book Copy 300#",
      discription: "150 Pages Double Side Countable.",
      price: 70,
      category: "stationary",
      products: "royalcopy",
    },
    {
      src: "/pictures/duxshorpner.jpg",
      alt: "Dux Shorpner",
      title: "Dux Pencil Sharpeners Jar Of 50 Pcs, Art # 502",
      discription: "Plastic manual sharpeners with metal blade.",
      price: 660,
      category: "stationary",
      products: "shorpner",
    },
    {
      src: "/pictures/eraser.jpg",
      alt: "Dux eraser",
      title: "DUX ERASER 2001",
      discription: "DUX Pencil Eraser",
      price: 660,
      category: "stationary",
      products: "dux eraser",
    },
    {
      src: "/pictures/highlighter.jpg",
      alt: "Highlighter",
      title: "Yalong Pastel Color Macaron Highlighter",
      discription: "Macaron Pastel Color Highlighter",
      price: 125,
      category: "stationary",
      products: "Highlighter",
    },
    {
      src: "/pictures/inkpen.jpg",
      alt: "inkpen",
      title: "Fountain Pen",
      discription:
        "Fountain pen with an attractive stylish design and a large ink storag",
      price: 159,
      category: "stationary",
      products: "Inkpen",
    },
  ];
  // carousel setting
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl capitalize text-center">
          Feature Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Carousel */}
      <Slider {...settings}>
        {bestSell.map((items, i) => (
          <BestSellingCard
            key={i}
            src={items.src}
            alt={items.alt}
            title={items.title}
            discription={items.discription}
            price={items.price}
            category={items.category}
            products={items.products}
          />
        ))}
      </Slider>
    </div>
  );
};

export default FeatureProduct;
