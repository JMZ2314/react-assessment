"use client"

import { Raleway } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const raleway = Raleway({
  weight: ['200','500','600','700'],
  subsets: ["latin"],
});

interface NavigationMenuItemProps {
    href: string,
    text: string,
    icon?: React.ReactNode
}

const NavigationMenuItem = ({text,href,icon} : NavigationMenuItemProps) => {

    const pathName = usePathname()

    return (
        <li className={`${raleway.className} font-medium`}>
            <Link href={href} className={`mx-8 flex items-center justify-center p-2 rounded-lg group ${pathName==href && "bg-[#DDF0F2] text-[#01C2D2]"}`}> 
                <div className="text-2xl">
                    {icon}
                </div>
                <span className="ms-3">{text}</span>
            </Link>
        </li>
    );
}

export default NavigationMenuItem;