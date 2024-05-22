import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import HallManagementContent from "./SectionAdminPageContent/HallManagementContent";
import ConfigurationHallsContent from "./SectionAdminPageContent/ConfigurationHallsContent";
import PriceConfigurationContent from "./SectionAdminPageContent/PriceConfigurationContent";
import SessionGridContent from "./SectionAdminPageContent/SessionGridContent";
import OpenSalesContent from "./SectionAdminPageContent/OpenSalesContent";

export default function AdminPageContent({ halls, movies, ...props }) {
    const [delHall, setDelHall] = useState({});
    const [delSession, setDelSession] = useState({});
    const [movieId, setMovieId] = useState("");
    const [currentHall, setCurrentHall] = useState({});
    const [prevStateHall, setPrevStateHall] = useState({});

    useEffect(() => {
        setCurrentHall(halls.length ? halls.at(-1) : {});
    }, [halls.length]);

    useEffect(() => {
        setCurrentHall(
            (prev) =>
                (prev = halls.length
                    ? halls.find((el) => el.id == prev.id)
                    : {})
        );
    }, [halls]);

    // для кнопки отмена
    useEffect(() => {
        setPrevStateHall(structuredClone(currentHall));
    }, [currentHall.id, halls]);

    // for onChange
    function handleChange(e) {
        const { name, value } = e.target;
        setCurrentHall((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <AuthenticatedLayout
            delHall={delHall}
            movieId={movieId}
            delSession={delSession}
        >
            <HallManagementContent setDelHall={setDelHall} />

            <ConfigurationHallsContent
                currentHall={currentHall}
                setCurrentHall={setCurrentHall}
                handleChange={handleChange}
                prevStateHall={prevStateHall}
            />

            <PriceConfigurationContent
                currentHall={currentHall}
                setCurrentHall={setCurrentHall}
                handleChange={handleChange}
                prevStateHall={prevStateHall}
            />

            <SessionGridContent
                setMovieId={setMovieId}
                setDelSession={setDelSession}
            />

            <OpenSalesContent currentHall={currentHall} />
        </AuthenticatedLayout>
    );
}
