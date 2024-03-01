import { toggleStatusSeat } from "@/admin/helpFunctions";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function SchemeHall({ currentHall }) {
    const { id, rows, cols, seats } = currentHall;
    const [seatsArr, setSeatsArr] = useState([]);

    // useEffect(() => {
    //     // Object.keys(currentHall).map((key, index) => {
    //     //     if (key === "seats") {
    //     //         setSeatsArr(currentHall[key]);
    //     //         // console.log(currentHall[key]);
    //     //         return;
    //     //     }
    //     // });
    //     setSeatsArr(seats);
    // }, [id]);

    const rowSeats = () => {
        let arr = [];
        let next = 0;
        for (let row = 0; row < rows; row++) {
            arr[row] = [];
            for (let col = 0; col < cols; col++) {
                if (!seats[next]) {
                    // next++;
                    seats[next] = {
                        number: next + 1,
                        status: "standart",
                        hall_id: id,
                    };
                }
                arr[row].push(seats[next]);
                next++;
            }
        }
        return arr;
    };

    const classSeat = ({ status }) =>
        classNames("conf-step__chair", {
            "conf-step__chair_disabled": status === "disabled",
            "conf-step__chair_vip": status === "vip",
            "conf-step__chair_standart": status || "",
        });

    return (
        <div className="conf-step__hall">
            <div className="conf-step__hall-wrapper">
                {console.log(rowSeats())}
                {rowSeats().map((row, index) => (
                    <div className="conf-step__row" key={index}>
                        {row.map((seat, ind) => (
                            <span
                                className={classSeat(seat)}
                                key={ind}
                                data-status={seat.status}
                                data-number={seat.number}
                                data-hall-id={id}
                                onClick={() => toggleStatusSeat(seat.status)}
                            ></span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
