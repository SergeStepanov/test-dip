import { useForm } from "@inertiajs/react";
import closeImg from "../../../../img/admin/close.png";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { hendleClosePopupsBtn } from "@/admin/helpFunctions";

export default function MovieAddPopup() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
    });

    function hendleSubmit(e) {
        e.preventDefault();

        post(route("movie.store"));

        if (data.title.trim() !== "") hendleClosePopupsBtn(e);
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
                                    // autoComplete="username"
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
