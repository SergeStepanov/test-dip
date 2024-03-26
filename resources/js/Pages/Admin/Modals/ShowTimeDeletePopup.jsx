import { useForm } from "@inertiajs/react";
import closeImg from "../../../../img/admin/close.png";
import { hendleClosePopupsBtn } from "@/admin/helpFunctions";
import { useEffect } from "react";

export default function ShowTimeDeletePopup({ delSession }) {
    const {
        data,
        setData,
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({});

    useEffect(() => {
        setData(delSession);
    }, [delSession]);

    function hendleSubmit(e) {
        e.preventDefault();
        destroy(route("session.destroy", data));
        // console.log(data);
        hendleClosePopupsBtn(e);
    }

    return (
        <div className="popup" id="delete_show_time">
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Снятие с сеанса
                            <a
                                className="popup__dismiss"
                                href="#"
                                onClick={(evt) => hendleClosePopupsBtn(evt)}
                            >
                                <img src={closeImg} alt="Закрыть" />
                            </a>
                        </h2>
                    </div>
                    <div className="popup__wrapper">
                        <form onSubmit={hendleSubmit}>
                            <p className="conf-step__paragraph">
                                Вы действительно хотите снять с сеанса фильм{" "}
                                <span>
                                    {delSession.movie && delSession.movie.title}
                                </span>
                                ?
                            </p>
                            {/* <!-- В span будет подставляться название фильма --> */}
                            <div className="conf-step__buttons text-center">
                                <input
                                    type="submit"
                                    value="Удалить"
                                    className="conf-step__button conf-step__button-accent"
                                />
                                <button
                                    className="conf-step__button conf-step__button-regular"
                                    onClick={(evt) => hendleClosePopupsBtn(evt)}
                                >
                                    Отменить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
