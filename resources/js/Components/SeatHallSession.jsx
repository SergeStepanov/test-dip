import { usePage } from "@inertiajs/react";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function SeatHallSession({ status, number, id, price }) {
    const { sessionDate } = usePage().props;

    const [statusSeat, setStatusSeat] = useState("");

    const classSeat = classNames("buying-scheme__chair", {
        "buying-scheme__chair_disabled": statusSeat === "disabled",
        "buying-scheme__chair_vip": statusSeat === "vip",
        "buying-scheme__chair_standart": statusSeat === "standart",
        "buying-scheme__chair_selected": statusSeat === "selected",
        "buying-scheme__chair_taken": statusSeat === "taken",
    });

    function handleClick(e) {
        if (e.target.dataset.status === "disabled") return;
        if (e.target.dataset.status === "taken") return;

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
            data-price={price}
            onClick={(e) => handleClick(e)}
        ></span>
    );
}
