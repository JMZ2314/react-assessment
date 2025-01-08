"use client"

import { IoSearch } from "react-icons/io5";
import TextInput from "../controls/input";
import OrderButton from "./order-button/order-button-";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const ItinerariesFilters = () => {

    const searchParams = useSearchParams()
    const path = usePathname()
    const { replace } = useRouter()
    const [searchText,setSearchText] = useState("")

    const handleChange = () => {

        const params = new URLSearchParams(searchParams)

        if(searchText)
            params.set("itinerary",searchText)
        else
            params.delete("itinerary")

        replace(`${path}?${params.toString()}`)
    }
    
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="">
                <TextInput placeholder="Search" handleChange={(e) => setSearchText(e.target.value)} handleKeyDown={(e) => e.key == "Enter" && handleChange()} icon={<IoSearch size={22} className="text-[#A6A9B3]" />} />
                <span className="mx-1 text-[#21052D]">Select the itinerary from the list below</span>
            </div>
            <OrderButton className="lg:ml-5" />
        </div>
    );
}

export default ItinerariesFilters;