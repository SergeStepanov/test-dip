import SeatHallSession from "@/Components/SeatHallSession";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm, usePage } from "@inertiajs/react";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function HallPageContent() {
    const { session, seats, sessionDate } = usePage().props;
    const [shemeRows, setShemeRows] = useState([]);
    const { data, setData, get, errors } = useForm({
        id: "",
        sessionDate: "",
        seatsNumber: null,
    });

    function handleSubmit(e) {
        const seatsSelected = Array.from(
            document.querySelectorAll(
                ".buying-scheme__chair_selected[data-status=selected]"
            )
        );

        if (seatsSelected.length === 0) return;
        
        let numbers = seatsSelected.map((el) => +el.dataset.number);

        setData((prev) => ({
            ...prev,
            seatsNumber: prev.seatsNumber = JSON.stringify(numbers),
        }));

        get(route("paymentpage", data));
        // console.log(data);
        // console.log(numbers);
    }

    function rowSeats() {
        let arr = [];
        let next = 0;
        for (let row = 0; row < session.hall.rows; row++) {
            arr[row] = [];
            for (let col = 0; col < session.hall.cols; col++) {
                if (!seats.length) return;
                arr[row].push(seats[next]);
                next++;
            }
        }
        return arr;
    }

    useEffect(() => {
        setShemeRows(rowSeats());
    }, [seats]);

    useEffect(() => {
        setData((prev) => ({
            ...prev,
            id: session.id,
            sessionDate: sessionDate,
        }));
    }, [session.id, sessionDate]);

    // console.log(shemeRows);
    return (
        <GuestLayout>
            <main>
                <section className="buying">
                    <div className="buying__info">
                        <div className="buying__info-description">
                            <h2 className="buying__info-title">
                                {session.movie.title}
                            </h2>
                            <p className="buying__info-start">
                                Начало сеанса: {sessionDate}
                            </p>
                            <p className="buying__info-hall">
                                {session.hall.name}
                            </p>
                        </div>
                        {/* <div className="buying__info-hint">
                            <p>
                                Тапните дважды,
                                <br />
                                чтобы увеличить
                            </p>
                        </div> */}
                    </div>
                    <div className="buying-scheme">
                        <div className="buying-scheme__wrapper">
                            {shemeRows.map((row, ind) => (
                                <div className={"buying-scheme__row"} key={ind}>
                                    {row.map((seat, ind) => (
                                        <SeatHallSession
                                            key={ind}
                                            status={seat.status}
                                            number={seat.number}
                                            id={seat.id}
                                        />
                                    ))}
                                </div>
                            ))}

                            <div className="buying-scheme__row">
                                <span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"></span>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                                <span className="buying-scheme__chair buying-scheme__chair_selected"></span>
                                <span className="buying-scheme__chair buying-scheme__chair_selected"></span>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                            </div>
                        </div>
                        <div className="buying-scheme__legend">
                            <div className="col">
                                <p className="buying-scheme__legend-price">
                                    <span className="buying-scheme__chair buying-scheme__chair_standart"></span>{" "}
                                    Свободно (
                                    <span className="buying-scheme__legend-value">
                                        {session.hall.price_standard}
                                    </span>
                                    руб)
                                </p>
                                <p className="buying-scheme__legend-price">
                                    <span className="buying-scheme__chair buying-scheme__chair_vip"></span>{" "}
                                    Свободно VIP (
                                    <span className="buying-scheme__legend-value">
                                        {session.hall.price_vip}
                                    </span>
                                    руб)
                                </p>
                            </div>
                            <div className="col">
                                <p className="buying-scheme__legend-price">
                                    <span className="buying-scheme__chair buying-scheme__chair_taken"></span>{" "}
                                    Занято
                                </p>
                                <p className="buying-scheme__legend-price">
                                    <span className="buying-scheme__chair buying-scheme__chair_selected"></span>{" "}
                                    Выбрано
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        style={{ cursor: "pointer" }}
                        className="acceptin-button"
                        onClick={handleSubmit}
                    >
                        Забронировать
                    </button>
                </section>
            </main>
        </GuestLayout>
    );
}
