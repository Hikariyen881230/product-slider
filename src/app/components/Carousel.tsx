import React from 'react'
import { carouselType } from '../types/propTypes'
import { Card } from './Card'

export const Carousel = (props: carouselType) => {
  return (
    <div className="wrapper w-full h-screen flex justify-center items-center">
      <div className="container py-4">
        <div className="font-GothamBold font-bold text-center">
          <h2 className="text-5xl">Best Seller Gaming PC</h2>
          <h4 className="text-3xl">Prebuilt & Custom</h4>
        </div>
        <Card />
      </div>
    </div>
  )
}
