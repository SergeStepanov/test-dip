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

    // console.log(halls);
    // console.log(currentHall.seats, prevStateHall.seats);
    useEffect(() => {
        setCurrentHall(halls.length ? halls.at(-1) : {});
    }, [halls.length]);

    useEffect(() => {
        // setCurrentHall(halls.length ? halls.at(-1) : {});
        setCurrentHall(
            (prev) =>
                (prev = halls.length
                    ? halls.find((el) => el.id == prev.id)
                    : {})
        );
        // setPrevStateHall(structuredClone(currentHall));
    }, [halls]);

    // для кнопки отмена
    useEffect(() => {
        setPrevStateHall(structuredClone(currentHall));
    }, [currentHall.id]);

    // useEffect(() => {
    //     // console.log(currentHall.seats, prevStateHall.seats);
    //     console.log(currentHall, prevStateHall);
    // });

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
            <SessionGridContent
                setMovieId={setMovieId}
                setDelSession={setDelSession}
            />

            {/* ? сделано */}
            <OpenSalesContent currentHall={currentHall} />
        </AuthenticatedLayout>
    );
}
