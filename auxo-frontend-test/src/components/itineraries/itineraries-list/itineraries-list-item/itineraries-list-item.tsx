import { Itinerary } from "@/types/itineraries";

const ItinerariesListItem = ( { id,price,agent,agent_rating } : Itinerary) => {
    return (
        <tr>
            <td className="pb-3">
                <div className="px-6 py-4 border border-r-0 rounded-l-lg">
                    {id}
                </div>
            </td>
            <td className="pb-3">
                <div className="px-6 py-4 border border-x-0">
                    {price}
                </div>
            </td>
            <td className="pb-3">
                <div className="px-6 py-4 border border-x-0">
                    {agent}
                </div>
            </td>
            <td className="pb-3">
                <div className="px-6 py-4 border border-l-0 rounded-r-lg">
                    {agent_rating}
                </div>
            </td>
        </tr>
    );
}

export default ItinerariesListItem;