import { hendleToggleHeaderSection } from "@/admin/helpFunctions";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

function OpenSalesContent({ currentHall, setCurrentHall }) {
    const { data, setData, patch: update } = useForm({});

    useEffect(() => {
        setData(currentHall);
    }, [currentHall]);

    function toggleActiv() {
        setCurrentHall((prev) => {
            prev, (prev.is_active = prev.is_active == 0 ? true : false);
        });
    }

    function hendleSubmit(e) {
        e.preventDefault();
        toggleActiv();

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
                    <form onSubmit={hendleSubmit}>
                        <button
                            type="submit"
                            className="conf-step__button conf-step__button-accent"
                        >
                            {currentHall.is_active == 0
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
