import { usePage } from "@inertiajs/react";

export default function TicketPageContent() {
    const { ticket, session } = usePage().props;

    return (
        <>
            <section className="ticket">
                <header className="tichet__check">
                    <h2 className="ticket__check-title">Электронный билет</h2>
                </header>

                <div className="ticket__info-wrapper">
                    <p className="ticket__info">
                        На фильм:{" "}
                        <span className="ticket__details ticket__title">
                            {session.movie.title}
                        </span>
                    </p>
                    <p className="ticket__info">
                        Места:{" "}
                        <span className="ticket__details ticket__chairs">
                            {ticket.seatsNumber.join(", ")}
                        </span>
                    </p>
                    <p className="ticket__info">
                        В зале:{" "}
                        <span className="ticket__details ticket__hall">
                            {session.hall.name}
                        </span>
                    </p>
                    <p className="ticket__info">
                        Начало сеанса:{" "}
                        <span className="ticket__details ticket__start">
                            {ticket.dateTime}
                        </span>
                    </p>

                    <img className="ticket__info-qr" src={`/storage/qr/${ticket.qrCode}`} alt="Qr Code"/>

                    <p className="ticket__hint">
                        Покажите QR-код нашему контроллеру для подтверждения
                        бронирования.
                    </p>
                    <p className="ticket__hint">Приятного просмотра!</p>
                </div>
            </section>
        </>
    );
}
