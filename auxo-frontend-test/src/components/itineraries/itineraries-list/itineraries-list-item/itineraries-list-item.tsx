"use client"

import { Itinerary } from "@/types/itineraries";
import { useRouter } from "next/navigation";

const ItinerariesListItem = ( { id,price,agent,agent_rating } : Itinerary) => {

    const router = useRouter()

    return (
        <tr className="cursor-pointer group" onClick={ () => { router.push(`/itineraries/${id}`) }}>
            <td className="pb-3">
                <div className="px-6 py-4 border border-r-0 rounded-l-lg group-hover:bg-[#00FF85]/[.2]">
                    {id}
                </div>
            </td>
            <td className="pb-3">
                <div className="px-6 py-4 border border-x-0 group-hover:bg-[#00FF85]/[.2]">
                    {price}
                </div>
            </td>
            <td className="pb-3">
                <div className="px-6 py-4 border border-x-0 group-hover:bg-[#00FF85]/[.2]">
                    {agent}
                </div>
            </td>
            <td className="pb-3">
                <div className="px-6 py-4 border border-l-0 rounded-r-lg group-hover:bg-[#00FF85]/[.2]">
                    {agent_rating}
                </div>
            </td>
        </tr>
    );
}

export default ItinerariesListItem;