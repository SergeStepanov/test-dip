import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import HallManagementContent from "./SectionAdminPageContent/HallManagementContent";
import ConfigurationHallsContent from "./SectionAdminPageContent/ConfigurationHallsContent";
import PriceConfigurationContent from "./SectionAdminPageContent/PriceConfigurationContent";
import SessionGridContent from "./SectionAdminPageContent/SessionGridContent";
import OpenSalesContent from "./SectionAdminPageContent/OpenSalesContent";

export default function AdminPageContent({ halls, movies, ...props }) {
    const [delHall, setDelHall] = useState({});

    return (
        <AuthenticatedLayout delHall={delHall}>
            <HallManagementContent halls={halls} setDelHall={setDelHall} />

            <ConfigurationHallsContent halls={halls} />

            <PriceConfigurationContent halls={halls} />
            {/* не готово */}
            <SessionGridContent movies={movies} />

            <OpenSalesContent />
        </AuthenticatedLayout>
    );
}
