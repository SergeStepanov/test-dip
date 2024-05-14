import { Link, usePage } from "@inertiajs/react";

export default function PaymentPageContent() {
    const { ticket, session } = usePage().props;
    console.log(ticket);
    console.log(session);

    return (
        <>
            <section className="ticket">
                <header className="tichet__check">
                    <h2 className="ticket__check-title">Вы выбрали билеты:</h2>
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
                    <p className="ticket__info">
                        Стоимость:{" "}
                        <span className="ticket__details ticket__cost">
                            {ticket.totalSum}
                        </span>{" "}
                        рублей
                    </p>

                    <Link
                        as="button"
                        className="acceptin-button"
                        style={{ cursor: "pointer" }}
                        // onClick="location.href='ticket.html'"
                    >
                        Получить код бронирования
                    </Link>

                    <p className="ticket__hint">
                        После оплаты билет будет доступен в этом окне, а также
                        придёт вам на почту. Покажите QR-код нашему контроллёру
                        у входа в зал.
                    </p>
                    <p className="ticket__hint">Приятного просмотра!</p>
                </div>
            </section>
        </>
    );
}
