import { toggleStatusSeat } from "@/admin/helpFunctions";
import { useEffect, useState } from "react";
import Seat from "./Seat";

export default function SchemeHall({ currentHall, seats, setSeats }) {
    const { id, rows, cols } = currentHall;
    const [shemeRows, setShemeRows] = useState([]);

    function handleClick(e) {
        let number = e.target.dataset.number;
        let status = e.target.dataset.status;
        let indSeat = seats.findIndex((item) => item.number == number);
        seats[indSeat].status = toggleStatusSeat(status);
        // console.log(number, seats[indSeat]);
        // console.log(e.target);
    }

    function rowSeats() {
        let arr = [];
        let next = 0;
        for (let row = 0; row < rows; row++) {
            arr[row] = [];
            for (let col = 0; col < cols; col++) {
                if (!seats) return;
                if (!seats[next]) {
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
        if (seats.length > next) {
            seats.splice(next);
        }
        return arr;
    }

    useEffect(() => {
        setShemeRows(rowSeats());
    }, [id, seats]);

    return (
        <div className="conf-step__hall">
            <div className="conf-step__hall-wrapper">
                {console.log(seats, shemeRows, currentHall.seats)}

                {shemeRows.map((row, index) => (
                    <div className="conf-step__row" key={index}>
                        {row.map((seat, ind) => (
                            <Seat
                                key={ind}
                                status={seat.status}
                                number={seat.number}
                                id={id}
                                handleClick={handleClick}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
