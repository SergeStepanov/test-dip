import { usePage } from "@inertiajs/react";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function SeatHallSession({ status, number, id }) {
    const { sessionDate } = usePage().props;

    const [statusSeat, setStatusSeat] = useState("");

    const classSeat = classNames("buying-scheme__chair", {
        "buying-scheme__chair_disabled": statusSeat === "disabled",
        "buying-scheme__chair_vip": statusSeat === "vip",
        "buying-scheme__chair_standart": statusSeat === "standart",
        "buying-scheme__chair_selected": statusSeat === "selected",
    });

    function handleClick(e) {
        if (e.target.dataset.status === "disabled") return;

        if (e.target.dataset.status === "selected") {
            setStatusSeat((prev) => (prev = e.target.dataset.prevStatus));
            return;
        }

        setStatusSeat("selected");
        // console.log(e.target);
    }

    useEffect(() => {
        setStatusSeat((prev) => (prev = status));
    }, [status]);

    return (
        <span
            className={classSeat}
            data-status={statusSeat}
            data-prev-status={status}
            data-number={number}
            data-session-date={sessionDate}
            onClick={(e) => handleClick(e)}
        ></span>
    );
}
