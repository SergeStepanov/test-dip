import { hendleToggleHeaderSection } from "@/admin/helpFunctions";
import { usePage } from "@inertiajs/react";

function PriceConfigurationContent({ isCheckedHallId, setIsCheckedHallId }) {
    const { halls } = usePage().props;

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
                                        hall.id == isCheckedHallId ? true : false
                                    }
                                    onChange={(e) =>
                                        setIsCheckedHallId(e.target.dataset.id)
                                    }
                                />
                                <span className="conf-step__selector">
                                    {hall.name}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <p className="conf-step__paragraph">
                        Установите цены для типов кресел:
                    </p>
                    {/* <div className="conf-step__legend">
                        <label className="conf-step__label">
                            Цена, рублей
                            <input
                                type="number"
                                name="price_standard"
                                className="conf-step__input"
                                placeholder="0"
                                min={0}
                            />
                        </label>
                        за{" "}
                        <span className="conf-step__chair conf-step__chair_standart"></span>{" "}
                        обычные кресла
                    </div>
                    <div className="conf-step__legend">
                        <label className="conf-step__label">
                            Цена, рублей
                            <input
                                type="number"
                                name="price_vip"
                                className="conf-step__input"
                                placeholder="0"
                                value="350"
                                min={0}
                                // defaultValue={}
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
                        />
                    </fieldset> */}
                </div>
            )}
        </section>
    );
}

export default PriceConfigurationContent;
