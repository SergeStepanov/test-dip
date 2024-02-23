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
    const [currentHall, setCurrentHall] = useState({});

    useEffect(() => {
        setIsCheckedHallId(halls.length ? halls.at(-1)["id"] : null);
    }, [halls]);

    useEffect(() => {
        setCurrentHall(halls.find((el) => el.id == isCheckedHallId));
        // console.log(currentHall);
    }, [isCheckedHallId, currentHall]);

    return (
        <AuthenticatedLayout delHall={delHall}>
            {/* сделано */}
            <HallManagementContent setDelHall={setDelHall} />

            {/* не сделано */}
            <ConfigurationHallsContent
                isCheckedHallId={isCheckedHallId}
                setIsCheckedHallId={setIsCheckedHallId}
                currentHall={currentHall}
            />

            {/* не сделано */}
            <PriceConfigurationContent
                isCheckedHallId={isCheckedHallId}
                setIsCheckedHallId={setIsCheckedHallId}
                currentHall={currentHall}
            />

            {/* не сделано */}
            {/* <SessionGridContent /> */}

            {/* не сделано */}
            <OpenSalesContent currentHall={currentHall} setCurrentHall={setCurrentHall} />
        </AuthenticatedLayout>
    );
}
