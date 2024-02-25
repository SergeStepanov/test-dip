import { useForm } from "@inertiajs/react";
import closeImg from "../../../../img/admin/close.png";
import { hendleClosePopupsBtn } from "@/admin/helpFunctions";
import { useEffect } from "react";

export default function HallDeletePopup({ delHall }) {
    const {
        data,
        setData,
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({});

    useEffect(() => {
        setData(delHall);
    }, [delHall]);

    function handleSubmit(e) {
        e.preventDefault();

        destroy(route("hall.destroy", data));

        hendleClosePopupsBtn(e);
    }

    return (
        <div className="popup" id="delete_hall_popup">
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Удаление зала
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
                        <form onSubmit={handleSubmit}>
                            <p className="conf-step__paragraph">
                                Вы действительно хотите удалить зал{" "}
                                <span>{delHall.name}</span>?
                            </p>
                            {/* <!-- В span будет подставляться название зала --> */}
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
