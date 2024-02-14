import { useForm } from '@inertiajs/react';
import closeImg from '../../../../img/admin/close.png';

export default function ShowTimeAddPopup() {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: "",
    });

    function hendleSubmit(e) {
        e.preventDefault();

        post(route(''));
    }

    return (
        <div className="popup">
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Добавление сеанса
                            <a className="popup__dismiss" href="#">
                                <img src={closeImg} alt="Закрыть" />
                            </a>
                        </h2>
                    </div>
                    <div className="popup__wrapper">
                        <form onSubmit={hendleSubmit}>
                            <label
                                className="conf-step__label conf-step__label-fullsize"
                                for="hall"
                            >
                                Название зала
                                <select
                                    className="conf-step__input"
                                    name="hall"
                                    required
                                >
                                    <option value="1" selected>
                                        Зал 1
                                    </option>
                                    <option value="2">Зал 2</option>
                                </select>
                            </label>
                            <label
                                className="conf-step__label conf-step__label-fullsize"
                                for="name"
                            >
                                Время начала
                                <input
                                    className="conf-step__input"
                                    type="time"
                                    value="00:00"
                                    name="start_time"
                                    required
                                />
                            </label>

                            <label
                                className="conf-step__label conf-step__label-fullsize"
                                for="name"
                            >
                                Название зала
                                <input
                                    className="conf-step__input"
                                    type="text"
                                    placeholder="Например, &laquo;Зал 1&raquo;"
                                    name="name"
                                    required
                                />
                            </label>

                            <div className="conf-step__buttons text-center">
                                <input
                                    type="submit"
                                    value="Добавить"
                                    className="conf-step__button conf-step__button-accent"
                                />
                                <button className="conf-step__button conf-step__button-regular">
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
