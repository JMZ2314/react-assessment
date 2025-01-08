import TextInput from "@/components/controls/input";
import OrderButton from "@/components/itineraries/order-button/order-button-";
import { IoSearch } from "react-icons/io5";

const ItinerariesPage = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <TextInput placeholder="Search" icon={<IoSearch  size={22} className="text-[#A6A9B3]" />} />
            <OrderButton className="lg:ml-5"/>
        </div>
    );
}

export default ItinerariesPage;