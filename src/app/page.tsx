import Categories from '@/components/categories'
import Hero from '@/components/hero'
import Promotion from '@/components/promotion'
import Services from '@/components/services'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Promotion />
      <Categories/>
    </div>
  )
}

export default Home
