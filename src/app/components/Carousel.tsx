'use client'
import React from 'react'
import { products } from '../utils/data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Card } from './Card'
import PrevArrow from './PrevArrow'
import NextArrow from './NextArrow'

const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="w-full 2xl:w-4/5 py-4">
        <section className="mt-16 w-full">
          <Slider {...settings}>
            {products.map((item, index) => {
              return (
                <div className="card my-5 px-1 sm:px-3 xl:px-7" key={index}>
                  <Card key={index} item={item} />
                </div>
              )
            })}
          </Slider>
        </section>
      </div>
    </>
  )
}
export default Carousel
