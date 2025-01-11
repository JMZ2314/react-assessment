"use client"

import { IoSearch } from "react-icons/io5";
import TextInput from "../controls/input";
import OrderButton from "./order-button/order-button-";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const ItinerariesFilters = () => {

    const searchParams = useSearchParams()
    const path = usePathname()
    const { replace } = useRouter()

    const handleChange = useDebouncedCallback((searchText:string) => {

        const params = new URLSearchParams(searchParams)

        if (searchText)
            params.set("find", searchText)
        else
            params.delete("find")

        replace(`${path}?${params.toString()}`)
        
    },300)

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="">
                <TextInput placeholder="Search" defaultValue={searchParams.get("find")?.toString()} handleChange={(e) => handleChange(e.target.value)} icon={<IoSearch size={22} className="text-[#A6A9B3]" />} />
                <span className="mx-1 text-[#21052D]">Select the itinerary from the list below</span>
            </div>
            <OrderButton className="lg:ml-5 mt-5 lg:mt-0" />
        </div>
    );
}

export default ItinerariesFilters;