import { useEffect, useState } from "react";
import Seat from "./Seat";

export default function SchemeHall({ currentHall, seats, setSeats }) {
    const { id, rows, cols } = currentHall;
    const [shemeRows, setShemeRows] = useState([]);

    function rowSeats() {
        let arr = [];
        let next = 0;
        for (let row = 0; row < rows; row++) {
            arr[row] = [];
            for (let col = 0; col < cols; col++) {
                if (!seats.length) return;
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
    }, [id, rows, cols, seats]);

    return (
        <div className="conf-step__hall">
            <div className="conf-step__hall-wrapper">
                {console.log(seats, shemeRows)}

                {shemeRows &&
                    shemeRows.map((row, index) => (
                        <div className="conf-step__row" key={index}>
                            {row.map((seat, ind) => (
                                <Seat
                                    key={ind}
                                    status={seat.status}
                                    number={seat.number}
                                    id={id}
                                    setSeats={setSeats}
                                />
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
}
