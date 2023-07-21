'use client'
import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons'

export const PrevArrow = (props: any) => {
  return (
    <div className=" w-11 h-11">
      <div className="shadow-buttonShadow">
        <IconContext.Provider value={{ className: 'arrow' }}>
          <IoChevronBackOutline size="40px" />
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default PrevArrow
