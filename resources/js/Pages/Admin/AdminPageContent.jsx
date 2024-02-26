import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import HallManagementContent from "./SectionAdminPageContent/HallManagementContent";
import ConfigurationHallsContent from "./SectionAdminPageContent/ConfigurationHallsContent";
import PriceConfigurationContent from "./SectionAdminPageContent/PriceConfigurationContent";
import SessionGridContent from "./SectionAdminPageContent/SessionGridContent";
import OpenSalesContent from "./SectionAdminPageContent/OpenSalesContent";

export default function AdminPageContent({ halls, movies, ...props }) {
    const [delHall, setDelHall] = useState({});
    const [currentHall, setCurrentHall] = useState({});
    const [prevStateHall, setPrevStateHall] = useState({});

    // useEffect(() => {
    //     setCurrentHall(halls.length ? halls.at(0) : null);
    // }, []);

    useEffect(() => {
        setCurrentHall(halls.length ? halls.at(-1) : {});
    }, [halls]);

    // useEffect(() => {
    //     setCurrentHall(halls.find((el) => el.id == currentHall.id));
    // }, [currentHall.id]);

    // для кнопки отмена
    useEffect(() => {
        setPrevStateHall(currentHall);
    }, [currentHall.id]);

    // for onChange
    function handleChange(e) {
        const { name, value } = e.target;
        setCurrentHall((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <AuthenticatedLayout delHall={delHall}>
            {/* сделано */}
            <HallManagementContent setDelHall={setDelHall} />

            {/* не сделано */}
            <ConfigurationHallsContent
                currentHall={currentHall}
                setCurrentHall={setCurrentHall}
                handleChange={handleChange}
                prevStateHall={prevStateHall}
            />

            {/* не сделано */}
            <PriceConfigurationContent
                currentHall={currentHall}
                setCurrentHall={setCurrentHall}
                handleChange={handleChange}
                prevStateHall={prevStateHall}
            />

            {/* не сделано */}
            {/* <SessionGridContent /> */}

            {/* ? сделано */}
            <OpenSalesContent currentHall={currentHall} />
        </AuthenticatedLayout>
    );
}
