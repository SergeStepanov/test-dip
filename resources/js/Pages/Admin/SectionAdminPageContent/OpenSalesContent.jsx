import { hendleToggleHeaderSection } from "@/admin/helpFunctions";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

function OpenSalesContent({ isCheckedHallId }) {
    const { halls } = usePage().props;
    const [currentHall, setCurrentHall] = useState({});
    const { data, setData, patch } = useForm({
        hall: "",
    });

    useEffect(() => {
        setCurrentHall(halls.find((el) => el.id == isCheckedHallId));

        setData("hall", currentHall);
    }, [isCheckedHallId, currentHall]);

    function hendleSubmit(e) {
        e.preventDefault();
        currentHall.is_active == 0
            ? (currentHall.is_active = true)
            : (currentHall.is_active = false);
            patch(route("hall.update", data));
        console.log(data);
    }

    return (
        <section className="conf-step">
            <header
                className="conf-step__header conf-step__header_opened"
                onClick={(evt) => hendleToggleHeaderSection(evt)}
            >
                <h2 className="conf-step__title">Открыть продажи</h2>
            </header>
            {!currentHall && (
                <div className="conf-step__wrapper text-center">
                    <p className="conf-step__paragraph">Добавьте зал.</p>
                </div>
            )}

            {currentHall && (
                <div className="conf-step__wrapper text-center">
                    <p className="conf-step__paragraph">
                        Всё готово, теперь можно:
                    </p>
                    <button
                        onClick={hendleSubmit}
                        type="submit"
                        className="conf-step__button conf-step__button-accent"
                    >
                        {currentHall.is_active == 0
                            ? "Открыть продажу билетов"
                            : "Приостановить продажу билетов"}
                    </button>
                </div>
            )}
        </section>
    );
}

export default OpenSalesContent;
