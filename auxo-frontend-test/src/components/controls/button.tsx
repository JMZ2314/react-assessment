import CustomComponent from "@/types/customComponent";
import { Raleway } from "next/font/google";
import Link from "next/link";
import React from "react";


const raleway = Raleway({
  weight: ['200','500','600','700'],
  subsets: ["latin"],
});

interface ButtonProps extends CustomComponent {
    text?: string
    href? : string,
    icon? : React.ReactNode,
    handleClick? : ( e: React.MouseEvent) => void
} 

const Button = ({text,href,className,icon,handleClick} : ButtonProps) => {
    return (
        href ? 
        <Link href={href} onClick={handleClick} className={`${className} ${raleway.className} h-fit text-center focus:ring-[#006DF0]/[.5] enabled:hover:brightness-[.95] focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`}>
            {icon && icon}
            {text && text}
        </Link>
        :
        <button type="button" onClick={handleClick} className={`${className} ${raleway.className} h-fit focus:ring-[#006DF0]/[.5] enabled:hover:brightness-[.95] focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`}>
            {icon && icon}
            {text && text}
        </button>
    );
}

export default Button;