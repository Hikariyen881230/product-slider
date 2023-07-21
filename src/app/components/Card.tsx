import React from 'react'
import { cardType } from '../types/propTypes'
import Image from 'next/image'
import calculateDeliveryDate from '../types/calculateDeliveryDate'

export const Card = (props: cardType) => {
  const { item } = props

  return (
    <div className="rounded-2xl shadow-cardShadow w-[22rem] ">
      <section className="relative p-5 w-full">
        <div className="font-GothamBook absolute w-content border rounded-full px-2 py-[2px] text-s text-mainGray border-mainGray font-bold">
          {item.type}
        </div>
        <div className="relative w-full flex justify-center mt-6">
          <a href="/">
            <Image
              src={`/statics/PCs/${item.img}`}
              alt="Gaming-RDY-SLHBG227"
              width={200}
              height={200}
            ></Image>
          </a>
        </div>
        <div className="flex flex-col gap-5">
          <a
            href="/"
            className="font-GothamBook text-base font-bold hover:text-red-500 transition"
          >
            {item.id}
          </a>
          <ul className="font-GothamBook text-sm leading-7">
            <li>{item.system}</li>
            <li>{item.cpu}</li>
            <li>{item.gpu}</li>
            <li>{item.disk}</li>
            <li>{item.memory}</li>
          </ul>
        </div>
      </section>
      <section className="mt-1 p-5 bg-sectionPrice">
        <div>
          <span className="font-GothamBook rounded-full px-2 py-1 text-xs bg-red-600 text-white font-bold">
            SAVE ${(item.originalPrice - item.discountPrice).toLocaleString()}
          </span>
          <div className="py-3">
            <span className="font-GothamBold mr-3 text-2xl font-bold">
              ${item.discountPrice.toLocaleString()}
            </span>
            <span className="font-GothamBook text-sm  text-mainGray line-through">
              ${item.originalPrice.toLocaleString()}
            </span>
            <p className="font-GothamBook text-xs flex items-center -mt-2">
              <span className="pt-[0.3rem]">
                Starting at{' '}
                <a className="text-blue-500" href="/">
                  $97/mo
                </a>
              </span>
              <span>
                <a href="/">
                  <Image
                    src={'/statics/icon-affirm.svg'}
                    alt="payment"
                    height={10}
                    width={50}
                  ></Image>
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-GothamBold text-sm font-bold">
              Free Shipping
            </span>
            <span className="text-xs">{calculateDeliveryDate(item.type)}</span>
          </div>
          <button className="text-red-600 border border-red-600 rounded-full px-3 hover:bg-red-600 hover:text-white transition duration-300">
            Buy Now
          </button>
        </div>
      </section>
    </div>
  )
}
