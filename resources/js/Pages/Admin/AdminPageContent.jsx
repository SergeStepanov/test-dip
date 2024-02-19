import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import HallManagementContent from "./SectionAdminPageContent/HallManagementContent";
import ConfigurationHallsContent from "./SectionAdminPageContent/ConfigurationHallsContent";
import PriceConfigurationContent from "./SectionAdminPageContent/PriceConfigurationContent";
import SessionGridContent from "./SectionAdminPageContent/SessionGridContent";
import OpenSalesContent from "./SectionAdminPageContent/OpenSalesContent";

export default function AdminPageContent({ halls, movies, ...props }) {
    const [delHall, setDelHall] = useState({});
    const [isCheckedHallId, setIsCheckedHallId] = useState(null);
    // console.log(isCheckedHallId);
    useEffect(() => {
        setIsCheckedHallId(halls.length ? halls.at(-1)["id"] : null);
    }, [halls]);

    return (
        <AuthenticatedLayout delHall={delHall}>
            {/* сделано */}
            <HallManagementContent setDelHall={setDelHall} />

            {/* не сделано */}
            <ConfigurationHallsContent
                isCheckedHallId={isCheckedHallId}
                setIsCheckedHallId={setIsCheckedHallId}
            />

            {/* не сделано */}
            <PriceConfigurationContent
                isCheckedHallId={isCheckedHallId}
                setIsCheckedHallId={setIsCheckedHallId}
            />

            {/* не сделано */}
            <SessionGridContent />

            {/* не сделано */}
            <OpenSalesContent isCheckedHallId={isCheckedHallId} />
        </AuthenticatedLayout>
    );
}
