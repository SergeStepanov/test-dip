import { useForm } from '@inertiajs/react';
import closeImg from '../../../../img/admin/close.png';

export default function ShowTimeDeletePopup() {
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
                            Снятие с сеанса
                            <a className="popup__dismiss" href="#">
                                <img src={closeImg} alt="Закрыть" />
                            </a>
                        </h2>
                    </div>
                    <div className="popup__wrapper">
                        <form onSubmit={hendleSubmit}>
                            <p className="conf-step__paragraph">
                                Вы действительно хотите снять с сеанса фильм{" "}
                                <span></span>?
                            </p>
                            {/* <!-- В span будет подставляться название фильма --> */}
                            <div className="conf-step__buttons text-center">
                                <input
                                    type="submit"
                                    value="Удалить"
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
