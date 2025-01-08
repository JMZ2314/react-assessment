"use client"

import { MdOutlineSentimentSatisfied, MdOutlineStarBorder, MdEuro, MdOutlineFilterAlt } from "react-icons/md";
import Button from "@/components/controls/button";
import CustomComponent from "@/types/customComponent";
import { useState } from "react";

const OrderButton = ({ className }: CustomComponent) => {

    const [showOptions,setShowOptions] = useState(false)

    return (
        <div className={`${className} flex`}>
            <Button icon={<MdOutlineFilterAlt size={22} />} className="bg-[#F2F2F2] text-[#01C2D2]" handleClick={ () => setShowOptions(!showOptions)}/>
            <div className={ `flex flex-col p-2 rounded-b-lg rounded-r-lg border-[1.5px] border-[#DCDCDC] shadow-sm duration-75 ${showOptions ? 'scale-100' : 'scale-0'}`} role="group">
                <button type="button" className=" rounded-lg inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-[#21052D] focus:z-10 focus:text-[#21052D]">
                    <MdOutlineSentimentSatisfied size={20} className="mr-1" />
                    Most Popular
                </button>
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 hover:text-[#21052D] focus:z-10 focus:text-[#21052D]">
                    <MdEuro size={20} className="mr-1" />
                    Price, Low to High
                </button>
                <button type="button" className="rounded-lg inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-[#21052D] focus:z-10 focus:text-[#21052D]">
                    <MdOutlineStarBorder size={20} className="mr-2" />
                    Rate, High to Low
                </button>
            </div>
        </div>
    );
}

export default OrderButton;