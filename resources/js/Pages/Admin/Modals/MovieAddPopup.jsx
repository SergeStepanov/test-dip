import { useForm } from '@inertiajs/react';
import closeImg from '../../../../img/admin/close.png';

export default function MovieAddPopup() {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: "",
    });

    function hendleSubmit(e) {
        e.preventDefault();

        post(route(''));
    }

    return (
        <div className="popup active">
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Добавление фильма
                            <a className="popup__dismiss" href="#">
                                <img src={closeImg} alt="Закрыть" />
                            </a>
                        </h2>
                    </div>
                    <div className="popup__wrapper">
                        <form onSubmit={hendleSubmit}>
                            <label
                                className="conf-step__label conf-step__label-fullsize"
                                for="name"
                            >
                                Название фильма
                                <input
                                    className="conf-step__input"
                                    type="text"
                                    placeholder="Например, &laquo;Гражданин Кейн&raquo;"
                                    name="name"
                                    required
                                />
                            </label>
                            <div className="conf-step__buttons text-center">
                                <input
                                    type="submit"
                                    value="Добавить фильм"
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
