import React from 'react'
import { PiPenNib } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";

const CategoryCard = ({icons,title}) => {
  return (
    <div className="category-card bg-white p-4 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-[#20B486] hover:cursor-pointer group/edit">
        <div className="flex gap-4">
          {icons}
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>

         <div className="group-hover/edit:bg-[#20B486] rounded-lg p-3">
          <GoArrowUpRight
             size={30}
             style={{color:'#20B486'}}
             className="arrow-icon"
           />

         </div>
    </div>
  )
}

export default CategoryCard