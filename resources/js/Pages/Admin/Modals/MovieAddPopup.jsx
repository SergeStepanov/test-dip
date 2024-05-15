import { useForm } from "@inertiajs/react";
import closeImg from "../../../../img/admin/close.png";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { hendleClosePopupsBtn } from "@/admin/helpFunctions";

export default function MovieAddPopup() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        duration: "",
        description: "",
        country: "",
        poster: null,
    });

    function hendleSubmit(e) {
        e.preventDefault();

        // console.log(data);
        post(route("movie.store"), {
            onSuccess: () => hendleClosePopupsBtn(e),
        });

        // if (data.title.trim() !== "") hendleClosePopupsBtn(e);
    }

    return (
        <div className="popup" id="add_movie_popup">
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Добавление фильма
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
                            <InputLabel
                                htmlFor="title"
                                className="conf-step__label conf-step__label-fullsize"
                            >
                                Название фильма
                                <TextInput
                                    id="title"
                                    type="text"
                                    name="title"
                                    value={data.title}
                                    className="conf-step__input"
                                    placeholder="Например, &laquo;Гражданин Кейн&raquo;"
                                    isFocused
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    required
                                />
                            </InputLabel>

                            <InputError
                                message={errors.title}
                                style={{
                                    fontSize: 15 + "px",
                                    color: "red",
                                }}
                            />

                            <InputLabel
                                htmlFor="duration"
                                className="conf-step__label conf-step__label-fullsize"
                            >
                                Продолжительность фильма (в минутах)
                                <TextInput
                                    id="duration"
                                    type="number"
                                    name="duration"
                                    value={data.duration}
                                    min={0}
                                    className="conf-step__input"
                                    placeholder="123"
                                    onChange={(e) =>
                                        setData("duration", e.target.value)
                                    }
                                    required
                                />
                            </InputLabel>

                            <InputError
                                message={errors.duration}
                                style={{
                                    fontSize: 15 + "px",
                                    color: "red",
                                }}
                            />

                            <InputLabel
                                htmlFor="description"
                                className="conf-step__label conf-step__label-fullsize"
                            >
                                Описание фильма
                                <TextInput
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    className="conf-step__input"
                                    placeholder="Например, &laquo;Самые опасные хищники Вселенной,&raquo;"
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    required
                                />
                            </InputLabel>

                            <InputError
                                message={errors.description}
                                style={{
                                    fontSize: 15 + "px",
                                    color: "red",
                                }}
                            />

                            <InputLabel
                                htmlFor="country"
                                className="conf-step__label conf-step__label-fullsize"
                            >
                                Страна выпуска фильма
                                <TextInput
                                    id="country"
                                    type="text"
                                    name="country"
                                    value={data.country}
                                    className="conf-step__input"
                                    placeholder="Например, &laquo;США, Канада&raquo;"
                                    onChange={(e) =>
                                        setData("country", e.target.value)
                                    }
                                    required
                                />
                            </InputLabel>

                            <InputError
                                message={errors.country}
                                style={{
                                    fontSize: 15 + "px",
                                    color: "red",
                                }}
                            />

                            <label
                                htmlFor="poster"
                                className="conf-step__label conf-step__label-fullsize"
                            >
                                Постер фильма
                                <input
                                    id="poster"
                                    type="file"
                                    name="poster"
                                    accept="image/*"
                                    className="conf-step__input"
                                    onChange={(e) =>
                                        setData(
                                            "poster",
                                            e.currentTarget.files[0]
                                        )
                                    }
                                    required
                                />
                            </label>

                            <InputError
                                message={errors.poster}
                                style={{
                                    fontSize: 15 + "px",
                                    color: "red",
                                }}
                            />

                            <div className="conf-step__buttons text-center">
                                <input
                                    type="submit"
                                    value="Добавить фильм"
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
