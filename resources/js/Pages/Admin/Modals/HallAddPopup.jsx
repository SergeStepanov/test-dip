import { useForm } from "@inertiajs/react";
import closeImg from "../../../../img/admin/close.png";
import { hendleClosePopupsBtn } from "@/admin/helpFunctions";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function HallAddPopup() {
    const { data, setData, post, processing, errors, hasErrors } = useForm({
        name: "",
    });

    function hendleSubmit(e) {
        e.preventDefault();

        post(route("hall.store"));

        if (data.name.trim() !== "") hendleClosePopupsBtn(e);
    }

    return (
        <div className="popup" id="add_hall_popup">
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
                            <InputLabel
                                htmlFor="name"
                                className="conf-step__label conf-step__label-fullsize"
                                style={{
                                    fontSize: 15 + "px",
                                }}
                            >
                                Название зала
                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="conf-step__inputв"
                                    placeholder="Например, &laquo;Зал 1&raquo;"
                                    // autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    style={{
                                        fontSize: 15 + "px",
                                        padding: 3 + "px",
                                    }}
                                />
                            </InputLabel>

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
