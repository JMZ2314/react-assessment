import DashboardTopbar from "@/components/dashboard-topbar/dashboard-topbar";
import LegsList from "@/components/legs/legs-list/legs-list";
import Loading from "@/components/loading";
import { getItineraryByID } from "@/services/itinerariesService";
import { Suspense } from "react";

interface LegsPageProps {
    params: {
        id: string
    }
}

const LegsPage = async ({ params }: LegsPageProps) => {

    const id = (await params).id

    const { success, data, message, statusCode } = await getItineraryByID(id)

    if (!success)
        console.log(`An error has occurred: ${message} status code ${statusCode}`)

    return (
        <div>
            <DashboardTopbar title={data?.id ?? ""} />
            <Suspense fallback={<Loading text="Cargando..." className="mx-auto mt-16"/>}>
                <LegsList legs_ids={data?.legs??[]}/>
            </Suspense>
        </div>
    );
}

export default LegsPage;