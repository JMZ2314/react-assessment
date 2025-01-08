import NavigationMenu from "@/components/navigation-menu/navigation-menu";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
    weight: ['600'],
    subsets: ["latin"],
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>
                <NavigationMenu />
                <div className="p-5 sm:ml-64 text-[#21052D]">
                    <div className="flex flex-col md:flex-row justify-between md:items-center my-5 mb-10">
                        <span className="text-[24px] m-2 font-normal text-[#21052D]">Welcome</span>
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
                    {children}
                </div>
            </div>
        </>
    );
}