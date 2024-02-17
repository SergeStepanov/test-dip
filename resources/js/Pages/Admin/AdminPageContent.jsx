import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import HallManagementContent from "./SectionAdminPageContent/HallManagementContent";
import ConfigurationHallsContent from "./SectionAdminPageContent/ConfigurationHallsContent";
import PriceConfigurationContent from "./SectionAdminPageContent/PriceConfigurationContent";
import SessionGridContent from "./SectionAdminPageContent/SessionGridContent";
import OpenSalesContent from "./SectionAdminPageContent/OpenSalesContent";

export default function AdminPageContent({ halls, movies, ...props }) {
    const [delHall, setDelHall] = useState({});
    const [isCheckedHall, setIsCheckedHall] = useState(0);

    return (
        <AuthenticatedLayout delHall={delHall}>
            {/* сделано */}
            <HallManagementContent setDelHall={setDelHall} />

            {/* не сделано */}
            <ConfigurationHallsContent isCheckedHall={isCheckedHall} />

            {/* не сделано */}
            <PriceConfigurationContent isCheckedHall={isCheckedHall} />

            {/* не готово */}
            <SessionGridContent movies={movies} />

            {/* не сделано */}
            <OpenSalesContent hall={halls[isCheckedHall]} />
        </AuthenticatedLayout>
    );
}
