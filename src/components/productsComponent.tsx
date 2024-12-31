'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ProductsComponent = () => {
  const [path, setPath] = useState("")
  return (
    <div>
      <Image src={path ? path : "/pictures/duxpencil1.jpg"} alt='E-commerce' width={400} height={400}/>
        <div className='flex items-center justify-evenly mx-auto mt-2'>
            <div className='cursor-pointer w-16 h-16'>
                <Image 
                src={"/pictures/royalcopy.jpg"} 
                alt='Picture' 
                width={60} 
                height={60}
                onClick={() => setPath("/pictures/royalcopy.jpg")}
                />
            </div>
            <div className='cursor-pointer w-16 h-16'>
                <Image 
                src={"/pictures/duxshorpner.jpg"} 
                alt='Picture' 
                width={60} 
                height={60}
                onClick={() => setPath("/pictures/duxshorpner.jpg")}
                />
            </div>
            <div className='cursor-pointer w-16 h-16'>
                <Image 
                src={"/pictures/eraser.jpg"} 
                alt='Picture' 
                width={60} 
                height={60}
                onClick={() => setPath("/pictures/eraser.jpg")}
                />
            </div>
        </div>
    </div>
  )
}

export default ProductsComponent
