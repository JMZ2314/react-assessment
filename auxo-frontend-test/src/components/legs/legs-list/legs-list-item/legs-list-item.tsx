import { Leg } from "@/types/itineraries";
import { IoIosAirplane } from "react-icons/io";

const LegsListItem = ( props : Leg  ) => {
    return (
        <div className="flex flex-col lg:flex-row my-10 lg:w-1/2">
            <input type="radio" name="leg" className="w-8 h-8 cursor-pointer mx-auto my-3 lg:my-auto lg:mr-12 accent-[#4F4F4F]" />
            <div className="grow">
                <div className="bg-[#E0E0E0] p-5 rounded-t-lg flex justify-between">
                    <span>{props.airline_name}</span>
                    <span className="text-[#01C2D2] font-medium">Leg_1</span>
                </div>
                <div className="mx-5 mt-5 font-semibold">
                    <span className="text-[#828282]">AIRLINE ID:</span><span className="text-[#4F4F4F] ml-1">{props.airline_id}</span>
                </div>
                <div className="mt-10 flex flex-wrap justify-between mx-5 px-5">
                    <div className="my-3">
                        <span className="mx-auto block text-center font-bold text-[#4F4F4F]">{props.departure_airport}</span>
                        <div className="flex items-center mt-5">
                            <IoIosAirplane size={30} className="text-[#828282] mr-5" />
                            <span>{props.departure_time}</span>
                        </div>
                    </div>
                    <div className="my-3">
                        <span className="mx-auto block text-center font-bold text-[#4F4F4F]">{props.arrival_airport}</span>
                        <div className="flex items-center mt-5">
                            <IoIosAirplane size={30} className="text-[#828282] mr-5" />
                            <span>{props.arrival_time}</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around mb-8 mt-5">
                    <div className="font-semibold">
                        <span className="text-[#828282]">STOPS:</span>
                        <span className="text-[#4F4F4F] ml-1">{props.stops}</span>
                    </div>
                    <div className="font-semibold">
                        <span className="text-[#828282]">DURATION MINS:</span>
                        <span className="text-[#4F4F4F] ml-1">{props.duration_mins}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LegsListItem;