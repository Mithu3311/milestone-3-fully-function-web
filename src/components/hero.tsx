import React from 'react'
import { Button } from './ui/button'
import { GiShoppingBag } from "react-icons/gi";

const Hero = () => {
  return (
    <div className='mb-[100px]'>
      <div
  className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat">
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">Quality <span className='text-myOrange'>Stationary</span> for Every Need and Every Dream!</h1>
      <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight">
      Discover the perfect tools for creativity and organization at [Sindh Computers Naukot]. From study to art, we have got you covered!
      </p>
      <Button className='outline outline-offset-2 outline-1 text-myWhite group hover:rounded-3xl duration-300 hover:outline-myOrange'>
      <GiShoppingBag className='group-hover:text-myOrange group-hover:animate-bounce'/> Shop Now
    </Button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
