import SchemeHall from "@/Components/SchemeHall";
import { hendleToggleHeaderSection } from "@/admin/helpFunctions";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

function ConfigurationHallsContent({
    currentHall,
    setCurrentHall,
    handleChange,
    prevStateHall,
}) {
    const { halls } = usePage().props;
    const { data, setData, patch: update } = useForm({});
    const {
        data: dataSeats,
        setData: setDataSeats,
        patch: upd,
    } = useForm({ id: null, data: [] });

    const [seats, setSeats] = useState([]);

    function cancelChanges() {
        setCurrentHall(prevStateHall);
    }

    function seatsArr() {
        let arr = [];
        let obj = structuredClone(currentHall);
        Object.keys(obj).map((key, index) => {
            if (key === "seats") {
                arr = obj[key].slice();
            }
        });
        return arr;
    }

    function handleSubmit(e) {
        e.preventDefault();

        update(route("hall.update", data));
        upd(route("seat.update", dataSeats));
    }

    useEffect(() => {
        setData({
            id: currentHall.id,
            name: currentHall.name,
            rows: currentHall.rows,
            cols: currentHall.cols,
        });

        setDataSeats((prev) => ({ ...prev, ["id"]: currentHall.id }));
    }, [currentHall]);

    useEffect(() => {
        setSeats(seatsArr());
    }, [currentHall.id, currentHall.seats]);

    useEffect(() => {
        setDataSeats((prev) => ({ ...prev, ["data"]: seats }));
    }, [seats]);

    return (
        <section className="conf-step">
            <header
                className="conf-step__header conf-step__header_opened"
                onClick={(evt) => hendleToggleHeaderSection(evt)}
            >
                <h2 className="conf-step__title">Конфигурация залов</h2>
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
                                    name="chairs-hall"
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
                                Укажите количество рядов и максимальное
                                количество кресел в ряду:
                            </p>
                            <div className="conf-step__legend">
                                <label className="conf-step__label">
                                    Рядов, шт
                                    <input
                                        type="number"
                                        name="rows"
                                        className="conf-step__input"
                                        placeholder="10"
                                        min={0}
                                        value={currentHall.rows || ""}
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </label>
                                <span className="multiplier">x</span>
                                <label className="conf-step__label">
                                    Мест, шт
                                    <input
                                        type="number"
                                        name="cols"
                                        className="conf-step__input"
                                        placeholder="8"
                                        min={0}
                                        value={currentHall.cols || ""}
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </label>
                            </div>
                            <p className="conf-step__paragraph">
                                Теперь вы можете указать типы кресел на схеме
                                зала:
                            </p>
                            <div className="conf-step__legend">
                                <span className="conf-step__chair conf-step__chair_standart"></span>{" "}
                                — обычные кресла
                                <span className="conf-step__chair conf-step__chair_vip"></span>{" "}
                                — VIP кресла
                                <span className="conf-step__chair conf-step__chair_disabled"></span>{" "}
                                — заблокированные (нет кресла)
                                <p className="conf-step__hint">
                                    Чтобы изменить вид кресла, нажмите по нему
                                    левой кнопкой мыши
                                </p>
                            </div>

                            <SchemeHall
                                currentHall={currentHall}
                                seats={seats}
                                setSeats={setSeats}
                            />

                            <form onSubmit={handleSubmit}>
                                <fieldset className="conf-step__buttons text-center">
                                    <button
                                        type="button"
                                        className="conf-step__button conf-step__button-regular"
                                        onClick={cancelChanges}
                                    >
                                        Отмена
                                    </button>
                                    <input
                                        type="submit"
                                        value="Сохранить"
                                        className="conf-step__button conf-step__button-accent"
                                    />
                                </fieldset>
                            </form>
                        </>
                    )}
                </div>
            )}
        </section>
    );
}

export default ConfigurationHallsContent;
