import { getItineraries } from "@/services/itinerariesService";
import ItinerariesListItem from "./itineraries-list-item/itineraries-list-item";
import { Itinerary } from "@/types/itineraries";

interface ItinerariesListProps {
    textFilter: string,
    orderCritery: string
}

const ItinerariesList = async ({ textFilter, orderCritery }: ItinerariesListProps) => {

    const { success, data, message, statusCode } = await getItineraries()

    if (!success)
        console.log(`An error has occurred: ${message} status code ${statusCode}`)

    let dataFilter = data?.filter(item => item.id.toLowerCase().includes(textFilter.toLocaleLowerCase()) || item.agent.toLowerCase().includes(textFilter.toLocaleLowerCase()))

    const getDataByOrderCritery = ((): (Itinerary[] | undefined) => {
        switch (orderCritery) {
            case "mostpopular":
                return (!data || data.length === 0) ? [] : [data?.reduce((prev, current) => prev.agent_rating > current.agent_rating ? prev : current) as Itinerary]
            case "price":
                return dataFilter?.sort((a, b) => Number(a.price.substring(1, a.price.length)) - Number(b.price.substring(1, b.price.length)))
            case "rate":
                return dataFilter?.sort((a, b) => b.agent_rating - a.agent_rating)
            default:
                return dataFilter;
        }
    })

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-center" cellPadding={0}>
                <thead>
                    <tr>
                        <th scope="col" className="font-normal px-6 py-3">
                            Id Itinerarie
                        </th>
                        <th scope="col" className="font-normal px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="font-normal px-6 py-3">
                            Agent
                        </th>
                        <th scope="col" className="font-normal px-6 py-3">
                            Agent ratingfo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getDataByOrderCritery()?.map(item => <ItinerariesListItem key={item.id} {...item} />)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ItinerariesList;