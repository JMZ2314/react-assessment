import { getLegsByIDs } from "@/services/itinerariesService";
import LegsListItem from "./legs-list-item/legs-list-item";

interface LegsListProps {
    legs_ids : string[]
}

const LegsList = async ( { legs_ids } : LegsListProps) => { 

    const { success, data, message, statusCode } = await getLegsByIDs(legs_ids)

    if (!success)
        console.log(`An error has occurred: ${message} status code ${statusCode}`)

    return (
        <div className="w-full flex flex-col items-center">
            {
                data?.map( item => {
                    return <LegsListItem key={item.id} {...item}/>
                })
            }
        </div>
    );
}

export default LegsList;