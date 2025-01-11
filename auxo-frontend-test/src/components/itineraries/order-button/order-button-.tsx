"use client"

import { MdOutlineSentimentSatisfied, MdOutlineStarBorder, MdEuro, MdOutlineFilterAlt } from "react-icons/md";
import Button from "@/components/controls/button";
import CustomComponent from "@/types/customComponent";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Raleway } from "next/font/google";

const raleway = Raleway({
    weight: ['600'],
    subsets: ["latin"],
});


const OrderButton = ({ className }: CustomComponent) => {

    const [showOptions, setShowOptions] = useState(false)
    
    const searchParams = useSearchParams()
    const path = usePathname()
    const { replace } = useRouter()
    const params = new URLSearchParams(searchParams)
    
    const [active, setActive] = useState<string | null>()

    const handleClick = (e: React.MouseEvent) => {

        if (window) {

            if (e.currentTarget.id){
                params.set("order", e.currentTarget.id)
                setActive(e.currentTarget.id)
            }
            else
                params.delete("order")

            replace(`${path}?${params.toString()}`)
        }
    }

    return (
        <div className={`${className} flex`}>
            <Button icon={<MdOutlineFilterAlt size={22} />} className="bg-[#F2F2F2] text-[#01C2D2]" handleClick={() => setShowOptions(!showOptions)} />
            <div className={`${raleway.className} font-semibold flex flex-col p-2 rounded-b-lg rounded-r-lg border-[1.5px] border-[#DCDCDC] shadow-sm duration-75 ${showOptions ? 'scale-100' : 'scale-0'}`} role="group">
                <button id="mostpopular" onClick={handleClick} type="button" className={`${active == "mostpopular" && "bg-[#21052D1A]/[.1]"} rounded-lg inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#21052D1A]/[.1] hover:text-[#21052D] focus:z-10 focus:text-[#21052D]`}>
                    <MdOutlineSentimentSatisfied size={20} className="mr-1" />
                    Most Popular
                </button>
                <button id="price" onClick={handleClick} type="button" className={`${active == "price" && "bg-[#21052D1A]/[.1]"} rounded-lg inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#21052D1A]/[.1] hover:text-[#21052D] focus:z-10 focus:text-[#21052D]`}>
                    <MdEuro size={20} className="mr-1" />
                    Price, Low to High
                </button>
                <button id="rate" onClick={handleClick} type="button" className={`${active == "rate" && "bg-[#21052D1A]/[.1]"} rounded-lg inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#21052D1A]/[.1] hover:text-[#21052D] focus:z-10 focus:text-[#21052D]`}>
                    <MdOutlineStarBorder size={20} className="mr-2" />
                    Rate, High to Low
                </button>
            </div>
        </div>
    );
}

export default OrderButton;