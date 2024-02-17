import { hendleToggleHeaderSection } from "@/admin/helpFunctions";

function OpenSalesContent({ hall }) {
    return (
        <section className="conf-step">
            <header
                className="conf-step__header conf-step__header_opened"
                onClick={(evt) => hendleToggleHeaderSection(evt)}
            >
                <h2 className="conf-step__title">Открыть продажи</h2>
            </header>
            <div className="conf-step__wrapper text-center">
                <p className="conf-step__paragraph">
                    Всё готово, теперь можно:
                </p>
                <button className="conf-step__button conf-step__button-accent">
                    {hall.is_active === 0
                        ? "Открыть продажу билетов"
                        : "Приостановить продажу билетов"}
                </button>
            </div>
        </section>
    );
}

export default OpenSalesContent;
