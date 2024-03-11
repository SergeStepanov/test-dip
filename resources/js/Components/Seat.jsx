import classNames from "classnames";
import { toggleStatusSeat } from "@/admin/helpFunctions";

export default function Seat({ status, number, id, setSeats }) {
    const classSeat = classNames("conf-step__chair", {
        "conf-step__chair_disabled": status === "disabled",
        "conf-step__chair_vip": status === "vip",
        "conf-step__chair_standart": status === "standart",
    });

    function handleClick(e) {
        let number = e.target.dataset.number;
        let statusEl = e.target.dataset.status;

        setSeats((prev) => [
            ...prev,
            (prev.find((item) => item.number == number).status =
                toggleStatusSeat(statusEl)),
        ]);
    }

    return (
        <span
            className={classSeat}
            data-status={status}
            data-number={number}
            data-hall-id={id}
            onClick={(e) => handleClick(e)}
        ></span>
    );
}
