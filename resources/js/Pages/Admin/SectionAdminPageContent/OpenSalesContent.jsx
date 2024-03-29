import { hendleToggleHeaderSection } from "@/admin/helpFunctions";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

function OpenSalesContent({ currentHall }) {
    const { data, setData, patch: update } = useForm({});
    const [isActive, setIsActive] = useState(0);

    useEffect(() => {
        setData({
            id: currentHall.id,
            name: currentHall.name,
            is_active: currentHall.is_active == 0 ? true : false,
        });
    }, [currentHall]);

    useEffect(() => {
        setIsActive(currentHall.is_active);
    }, [currentHall.is_active]);

    function hendleSubmit(e) {
        e.preventDefault();

        update(route("hall.update", data));
    }

    return (
        <section className="conf-step">
            <header
                id="update_hall"
                className="conf-step__header conf-step__header_opened"
                onClick={(evt) => hendleToggleHeaderSection(evt)}
            >
                <h2 className="conf-step__title">Открыть продажи</h2>
            </header>
            {!currentHall.id && (
                <div className="conf-step__wrapper text-center">
                    <p className="conf-step__paragraph">Добавьте зал.</p>
                </div>
            )}

            {currentHall.id && (
                <div className="conf-step__wrapper text-center">
                    <p className="conf-step__paragraph">
                        Всё готово, теперь можно:
                    </p>
                    <form onSubmit={hendleSubmit}>
                        <button
                            type="submit"
                            className="conf-step__button conf-step__button-accent"
                        >
                            {isActive == 0
                                ? "Открыть продажу билетов"
                                : "Приостановить продажу билетов"}
                        </button>
                    </form>
                </div>
            )}
        </section>
    );
}

export default OpenSalesContent;
