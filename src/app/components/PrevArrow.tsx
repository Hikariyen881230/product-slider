'use client'
import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons'

export const PrevArrow = (props: any) => {
  const { onClick } = props
  return (
    <div
      className="arrow-button absolute right-24 -top-[65px] w-11 h-11"
      onClick={onClick}
    >
      <div className="w-full h-full shadow-buttonShadow">
        <IconContext.Provider value={{ className: 'arrow' }}>
          <IoChevronBackOutline size="40px" />
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default PrevArrow
