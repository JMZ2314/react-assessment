import ItinerariesFilters from "@/components/itineraries/itineraries-filters";
import ItinerariesList from "@/components/itineraries/itineraries-list/itineraries-list";
import Loading from "@/components/loading";
import { Suspense } from "react";

const ItinerariesPage = async ({ searchParams }: {
    searchParams?: Promise<{
        itinerary?: string
    }>
}) => {

    const itinerary = (await searchParams)?.itinerary || ""

    return (
        <div>
            <ItinerariesFilters />
            <Suspense key={itinerary + new Date()} fallback={<Loading text="Cargando..." className="mx-auto lg:mt-10 mt-5"/>}>
                <ItinerariesList />
            </Suspense>
        </div>
    );
}

export default ItinerariesPage;