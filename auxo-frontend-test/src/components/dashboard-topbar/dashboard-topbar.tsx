import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
    weight: ['600'],
    subsets: ["latin"],
});

interface DashboardTopbarProps {
    title: string
}

const DashboardTopbar = ({ title }: DashboardTopbarProps) => {
    return (
        <div className="flex flex-col md:flex-row justify-between md:items-center my-5 mb-7">
            <span className="text-[24px] mx-5 my-2 font-normal text-[#21052D]">{title}</span>
            <div className="flex items-center m-2">
            <div className="w-[39px] h-[39px] rounded-full overflow-hidden">
                <Image src={"/img/profileimage.jpg"} alt={"Imagen de perfil del usuario"} width={128} height={128} className="object-cover" />
            </div>
            <span className={`text-[20px] mx-3 ${raleway.className} font-semibold`}>Pepe Ladino</span>
            <span className="bg-[#DDF0F2] text-[#01C2D2] rounded-md w-[39px] h-[39px] flex items-center justify-center">
                ?
            </span>
        </div>
        </div>
    );
}

export default DashboardTopbar;