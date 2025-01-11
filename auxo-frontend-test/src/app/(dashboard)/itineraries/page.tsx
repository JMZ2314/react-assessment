import DashboardTopbar from "@/components/dashboard-topbar/dashboard-topbar";
import ItinerariesFilters from "@/components/itineraries/itineraries-filters";
import ItinerariesList from "@/components/itineraries/itineraries-list/itineraries-list";
import Loading from "@/components/loading";
import { Suspense } from "react";

const ItinerariesPage = async ({ searchParams }: {
    searchParams?: Promise<{
        find?: string,
        order: string
    }>
}) => {

    const findText = (await searchParams)?.find || ""
    const orderText = (await searchParams)?.order || ""

    return (
        <div>
            <DashboardTopbar title="Welcome"/>
            <ItinerariesFilters />
            <Suspense key={findText + new Date()} fallback={<Loading text="Cargando..." className="mx-auto lg:mt-10 mt-5" />}>
                <ItinerariesList textFilter={findText} orderCritery={orderText}/>
            </Suspense>
        </div>
    );
}

export default ItinerariesPage;