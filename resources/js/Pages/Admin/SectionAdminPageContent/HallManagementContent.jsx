import { hendleToggleHeaderSection, openPopup } from "@/admin/helpFunctions";
import { usePage } from "@inertiajs/react";

function HallManagementContent({ setDelHall }) {
    const { halls } = usePage().props;
    return (
        <section className="conf-step">
            <header
                className="conf-step__header conf-step__header_opened"
                onClick={(evt) => hendleToggleHeaderSection(evt)}
            >
                <h2 className="conf-step__title">Управление залами</h2>
            </header>

            {halls.length === 0 && (
                <div className="conf-step__wrapper">
                    <p className="conf-step__paragraph">Добавьте зал.</p>
                </div>
            )}

            <div className="conf-step__wrapper">
                {halls.length !== 0 && (
                    <>
                        <p className="conf-step__paragraph">Доступные залы:</p>
                        <ul className="conf-step__list">
                            {halls.map((hall) => (
                                <li key={hall.id}>
                                    {hall.name}
                                    <button
                                        className="conf-step__button conf-step__button-trash"
                                        onClick={() => {
                                            setDelHall(hall);

                                            openPopup("delete_hall_popup");
                                        }}
                                    ></button>
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                <button
                    className="conf-step__button conf-step__button-accent"
                    onClick={() => openPopup("add_hall_popup")}
                >
                    Создать зал
                </button>
            </div>
        </section>
    );
}

export default HallManagementContent;
