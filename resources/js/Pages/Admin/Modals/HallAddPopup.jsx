import { useForm } from "@inertiajs/react";
import closeImg from "../../../../img/admin/close.png";
import { hendleClosePopupsBtn } from "@/admin/helpFunctions";

export default function HallAddPopup() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
    });

    function hendleSubmit(e) {
        e.preventDefault();

        post(route(""));
    }

    return (
        <div className="popup">
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Добавление зала
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
                            <label
                                className="conf-step__label conf-step__label-fullsize"
                                htmlFor="name"
                            >
                                Название зала
                                <input
                                    className="conf-step__inputв"
                                    type="text"
                                    placeholder="Например, &laquo;Зал 1&raquo;"
                                    name="name"
                                    required
                                />
                            </label>
                            <div className="conf-step__buttons text-center">
                                <input
                                    type="submit"
                                    value="Добавить зал"
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
