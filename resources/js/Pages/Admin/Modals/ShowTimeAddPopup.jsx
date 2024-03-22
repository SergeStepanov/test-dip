import { useForm, usePage } from "@inertiajs/react";
import closeImg from "../../../../img/admin/close.png";
import { hendleClosePopupsBtn } from "@/admin/helpFunctions";
import { useEffect } from "react";
import InputError from "@/Components/InputError";

export default function ShowTimeAddPopup({ movieId }) {
    const { halls } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        start_time: "",
        hall_id: "",
        movie_id: "",
    });

    useEffect(() => {
        setData((prev) => ({ ...prev, hall_id: halls[0].id }));
    }, [halls]);

    useEffect(() => {
        setData((prev) => ({ ...prev, movie_id: movieId }));
    }, [movieId]);

    function hendleSubmit(e) {
        e.preventDefault();

        console.log(data);
        post(route("session.store"), {
            onSuccess: () => hendleClosePopupsBtn(e),
        });
    }

    return (
        <div className="popup" id="add_show_time">
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Добавление сеанса
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
                                htmlFor="hall_id"
                            >
                                Название зала
                                <select
                                    className="conf-step__input"
                                    name="hall_id"
                                    required
                                    value={data.hall_id}
                                    onChange={(e) =>
                                        setData("hall_id", e.target.value)
                                    }
                                >
                                    {halls.length !== 0 &&
                                        halls.map((hall) => (
                                            <option
                                                value={hall.id}
                                                key={hall.id}
                                            >
                                                {hall.name}
                                            </option>
                                        ))}
                                </select>
                            </label>
                            <InputError
                                message={errors.hall_id}
                                style={{
                                    fontSize: 15 + "px",
                                    color: "red",
                                }}
                            />

                            <label
                                className="conf-step__label conf-step__label-fullsize"
                                htmlFor="name"
                            >
                                Время начала
                                <input
                                    className="conf-step__input"
                                    type="time"
                                    value={data.start_time}
                                    // defaultValue={"00:00"}
                                    name="start_time"
                                    onChange={(e) =>
                                        setData("start_time", e.target.value)
                                    }
                                    required
                                />
                            </label>
                            <InputError
                                message={errors.time}
                                style={{
                                    fontSize: 15 + "px",
                                    color: "red",
                                }}
                            />

                            <label
                                className="conf-step__label conf-step__label-fullsize"
                                htmlFor="name"
                            >
                                Название зала
                                <input
                                    className="conf-step__input"
                                    type="text"
                                    placeholder="Например, &laquo;Зал 1&raquo;"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                            </label>
                            <InputError
                                message={errors.name}
                                style={{
                                    fontSize: 15 + "px",
                                    color: "red",
                                }}
                            />

                            <div className="conf-step__buttons text-center">
                                <input
                                    type="submit"
                                    value="Добавить"
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
