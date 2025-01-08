import { getItineraries } from "@/services/itinerariesService";
import ItinerariesListItem from "./itineraries-list-item/itineraries-list-item";

const ItinerariesList = async () => {

    const { success,data,message,statusCode } = await getItineraries()

    if(!success)
        console.log(`An error has occurred: ${message} status code ${statusCode}`)

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-center">
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
                        data?.map( item => <ItinerariesListItem key={item.id} {...item} />)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ItinerariesList;