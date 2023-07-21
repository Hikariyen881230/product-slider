'use client'
import React from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons'

export const NextArrow = (props: any) => {
  return (
    <div className=" w-11 h-11">
      <div className="shadow-buttonShadow">
        <IconContext.Provider value={{ className: 'arrow' }}>
          <IoChevronForwardOutline size="40px" />
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default NextArrow
