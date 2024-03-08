import classNames from "classnames";

export default function Seat({ status, number, id, handleClick }) {
    const classSeat = classNames("conf-step__chair", {
        "conf-step__chair_disabled": status === "disabled",
        "conf-step__chair_vip": status === "vip",
        "conf-step__chair_standart": status === "standart",
        
    });

    return (
        <span
        className={classSeat}
        data-status={status}
        data-number={number}
        data-hall-id={id}
        onClick={(e) => handleClick(e)}
    ></span>

    )
}
