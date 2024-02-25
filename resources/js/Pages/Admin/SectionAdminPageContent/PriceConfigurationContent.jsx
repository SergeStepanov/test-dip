import { hendleToggleHeaderSection } from "@/admin/helpFunctions";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";

function PriceConfigurationContent({ currentHall, setCurrentHall }) {
    const { halls } = usePage().props;
    const { data, setData, patch: update } = useForm({});

    useEffect(() => {
        setData({
            id: currentHall.id,
            name: currentHall.name,
            price_standard: currentHall.price_standard,
            price_vip: currentHall.price_vip,
        });
    }, [currentHall]);

    function handleChange(e) {
        const { name, value } = e.target;
        setCurrentHall((prev) => {
            prev, (prev[name] = value);
        });
        // console.log(typeof value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // update(route("hall.update", data));
        console.log(data);
    }

    return (
        <section className="conf-step">
            <header
                className="conf-step__header conf-step__header_opened"
                onClick={(evt) => hendleToggleHeaderSection(evt)}
            >
                <h2 className="conf-step__title">Конфигурация цен</h2>
            </header>

            {halls.length === 0 && (
                <div className="conf-step__wrapper">
                    <p className="conf-step__paragraph">Добавьте зал.</p>
                </div>
            )}

            {halls.length !== 0 && (
                <div className="conf-step__wrapper">
                    <p className="conf-step__paragraph">
                        Выберите зал для конфигурации:
                    </p>

                    <ul className="conf-step__selectors-box">
                        {halls.map((hall) => (
                            <li key={hall.id}>
                                <input
                                    type="radio"
                                    className="conf-step__radio"
                                    name="prices-hall"
                                    value={hall.name}
                                    data-id={hall.id}
                                    checked={
                                        hall.id == currentHall.id ? true : false
                                    }
                                    onChange={() => setCurrentHall(hall)}
                                />
                                <span className="conf-step__selector">
                                    {hall.name}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {currentHall && (
                        <>
                            <p className="conf-step__paragraph">
                                Установите цены для типов кресел:
                            </p>
                            <div className="conf-step__legend">
                                <label className="conf-step__label">
                                    Цена, рублей
                                    <input
                                        type="number"
                                        name="price_standard"
                                        className="conf-step__input"
                                        placeholder="0"
                                        min={0}
                                        value={currentHall.price_standard}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </label>
                                за{" "}
                                <span className="conf-step__chair conf-step__chair_standart"></span>{" "}
                                обычные кресла
                            </div>
                            {/* <div className="conf-step__legend">
                                <label className="conf-step__label">
                                    Цена, рублей
                                    <input
                                        type="number"
                                        name="price_vip"
                                        className="conf-step__input"
                                        placeholder="0"
                                        min={0}
                                        value={currentHall.price_vip}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </label>
                                за{" "}
                                <span className="conf-step__chair conf-step__chair_vip"></span>{" "}
                                VIP кресла
                            </div> */}

                            {/* <fieldset className="conf-step__buttons text-center">
                                <button className="conf-step__button conf-step__button-regular">
                                    Отмена
                                </button>
                                <input
                                    type="submit"
                                    value="Сохранить"
                                    className="conf-step__button conf-step__button-accent"
                                    onSubmit={hendleSubmit}
                                />
                            </fieldset> */}
                        </>
                    )}
                </div>
            )}
        </section>
    );
}

export default PriceConfigurationContent;
