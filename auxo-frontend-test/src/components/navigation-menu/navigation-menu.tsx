"use client"

import Link from "next/link";
import NavigationMenuItem from "./navigation-menu-item";
import { MdConnectingAirports } from "react-icons/md";
import { IoLogOutOutline, IoMenu } from "react-icons/io5";
import { Raleway } from "next/font/google";
import { useState } from "react";

const raleway = Raleway({
    weight: ['500'],
    subsets: ["latin"],
});

const NavigationMenu = () => {

    const [openMenu,setOpenMenu] = useState(false)

    return (
        <div className="flex flex-col bg-[#FFFFFF]">
            <button onClick={ () => setOpenMenu(!openMenu)} type="button" className="self-end m-3 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <IoMenu size={30} className="text-[#21052D]"/>
            </button>
            <aside id="logo-sidebar" className={`bg-[#FFFFFF] fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${openMenu ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 `}>
                <div className="absolute top-6 bottom-6 right-0 w-[1px] bg-[#426294]" />
                <svg width="160" height="34" viewBox="0 0 160 34" fill="none" className="mt-[83px] mx-auto">
                    <path d="M143.132 33.4209C133.892 33.4209 126.377 25.925 126.377 16.7099C126.377 12.2445 128.11 8.0478 131.282 4.89373C134.452 1.73627 138.657 0 143.132 0C152.362 0 159.876 7.48907 159.876 16.7053C159.877 25.925 152.373 33.4209 143.132 33.4209ZM143.132 5.85253C140.223 5.85253 137.491 6.97793 135.431 9.02587C133.373 11.0806 132.241 13.8085 132.241 16.7065C132.241 22.6973 137.126 27.5683 143.131 27.5683C149.125 27.5683 154.02 22.6973 154.02 16.711C154.013 10.7225 149.127 5.85253 143.132 5.85253Z" fill="#21052D" />
                    <path d="M62.2689 33.0015C53.039 33.0015 45.5251 25.5022 45.5251 16.2905V3.36371C45.5251 1.74871 46.83 0.440845 48.4507 0.440845C50.0736 0.440845 51.3888 1.74871 51.3888 3.36371V16.286C51.3888 22.2722 56.2746 27.1444 62.2689 27.1444C68.2734 27.1444 73.1593 22.2722 73.1593 16.286V3.34444C73.1593 1.72604 74.4744 0.419312 76.0872 0.419312C77.7101 0.419312 79.023 1.72604 79.023 3.34444V16.2871C79.023 25.5022 71.5091 33.0015 62.2689 33.0015Z" fill="#21052D" />
                    <path d="M8.59285 33.0117C8.09881 33.0117 7.59683 32.8893 7.13914 32.6389C5.68429 31.8376 5.15164 30.005 5.95572 28.5532L20.6121 1.96292C21.1414 0.999585 22.159 0.409119 23.2515 0.409119C23.2606 0.409119 23.2606 0.409119 23.2606 0.409119C24.3509 0.409119 25.3673 0.999585 25.8977 1.96292L40.5825 28.5487C41.3832 30.005 40.8528 31.8342 39.3991 32.6389C37.934 33.4345 36.0987 32.9131 35.2958 31.4568L23.2595 9.65259L11.2413 31.4511C10.6814 32.4519 9.65474 33.0117 8.59285 33.0117Z" fill="#21052D" />
                    <path d="M118.632 33.3642C117.899 33.3642 117.148 33.099 116.574 32.546L88.1882 5.97836C86.9787 4.83823 86.9105 2.93536 88.0485 1.72156C89.1865 0.511161 91.0979 0.451094 92.3199 1.59123L120.699 28.1656C121.91 29.308 121.967 31.2109 120.83 32.4156C120.236 33.0492 119.431 33.3642 118.632 33.3642Z" fill="#21052D" />
                    <path d="M90.2688 33.3836C89.4648 33.3836 88.6641 33.0662 88.0678 32.4338C86.9299 31.2246 86.9878 29.3206 88.1984 28.1816L116.56 1.57317C117.767 0.437566 119.674 0.493099 120.821 1.7035C121.956 2.9071 121.903 4.81563 120.691 5.95463L92.3279 32.563C91.7498 33.1127 91.0037 33.3836 90.2688 33.3836Z" fill="#21052D" />
                    <path d="M53.4665 8.77414L53.7708 8.00199C54.0244 7.36085 53.6158 6.65003 52.9282 6.53574L52.0997 6.39915C51.3444 6.27371 50.5695 6.39358 49.8903 6.73644L45.4152 9.00829C40.2158 11.6481 35.4589 15.0684 31.3135 19.1466C30.9951 19.4616 31.2994 19.9912 31.7334 19.8797C37.3978 18.4553 42.8057 16.1695 47.7655 13.1088L52.0349 10.4745C52.683 10.0731 53.1846 9.4766 53.4608 8.77135L53.4665 8.77414Z" fill="#56CCF2" />
                    <path d="M47.3202 9.17834L34.1739 5.04999C33.1847 4.74057 32.4295 5.93921 33.1481 6.67791L39.7086 13.4489L47.3202 9.17834Z" fill="#56CCF2" />
                    <path d="M48.5968 11.4056L45.4349 24.6883C45.1982 25.6862 43.7694 25.7113 43.4961 24.7245L40.9852 15.6789L48.5968 11.4084V11.4056Z" fill="#56CCF2" />
                    <path d="M34.5318 17.2929L29.7467 15.7904C29.386 15.6761 29.1126 16.1138 29.3747 16.3841L31.7616 18.8483L34.5318 17.2929Z" fill="#56CCF2" />
                    <path d="M34.9967 18.1012L33.8441 22.9348C33.7567 23.2972 33.2382 23.3084 33.1368 22.9488L32.2237 19.6567L34.9939 18.1012H34.9967Z" fill="#56CCF2" />
                    <path d="M30.9972 20C30.9972 20 10.9745 30.5806 5.75861 28.0522C0.542727 25.5211 10.4588 20.2308 10.4588 20.2308C10.4588 20.2308 -4.54143 26.2924 1.38635 31.7212C8.06806 37.8425 31 20 31 20H30.9972Z" fill="#56CCF2" />
                </svg>
                <nav className="h-full px-1 mt-10 flex flex-col">
                    <ul className="space-y-2 font-medium">
                        <NavigationMenuItem text="Itineraries" href="/itineraries" icon={<MdConnectingAirports />} />
                    </ul>
                    <div className="mt-auto mb-48">
                        <div className="absolute left-6 right-6 h-[1px] bg-[#00FF85]" />
                        <Link href={"/"} className={`${raleway.className} flex items-center justify-center  p-2 hover:bg-[#F2F2F2] hover:text-[#01C2D2] mx-5 mt-3 rounded-lg group`}>
                            <div>
                                <IoLogOutOutline className="text-2xl" />
                            </div>
                            <span className="ms-3">Log out</span>
                        </Link>
                    </div>
                </nav>
            </aside>
        </div>
    );
}

export default NavigationMenu;