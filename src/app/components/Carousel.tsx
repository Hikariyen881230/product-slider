import React from 'react'
import { products } from '../utils/data'
import { carouselType } from '../types/propTypes'
import { Card } from './Card'
import PrevArrow from './PrevArrow'
import NextArrow from './NextArrow'

export const Carousel = (props: carouselType) => {
  return (
    <>
      <div className="w-full md:w-3/4 py-4">
        <div className="font-GothamBold font-bold text-center">
          <h2 className="text-2xl md:text-4xl xl:text-5xl">
            Best Seller Gaming PC
          </h2>
          <h4 className="text-xl md:text-2xl xl:text-3xl">Prebuilt & Custom</h4>
        </div>
        <PrevArrow />
        <NextArrow />
        {products.map((item, index) => {
          return <Card key={index} item={item} />
        })}
      </div>
    </>
  )
}
