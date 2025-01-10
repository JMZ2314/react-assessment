import NavigationMenu from "@/components/navigation-menu/navigation-menu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="grow flex flex-col">
                <NavigationMenu/>
                <div className="p-5 sm:ml-64 text-[#21052D">
                    {children}
                </div>
            </div>
        </>
    );
}