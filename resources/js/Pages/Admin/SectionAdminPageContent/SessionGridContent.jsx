import { hendleToggleHeaderSection, openPopup } from "@/admin/helpFunctions";

function SessionGridContent({ movies }) {
    return (
        <section className="conf-step">
            <header
                className="conf-step__header conf-step__header_opened"
                onClick={(evt) => hendleToggleHeaderSection(evt)}
            >
                <h2 className="conf-step__title">Сетка сеансов</h2>
            </header>
            <div className="conf-step__wrapper">
                <p className="conf-step__paragraph">
                    <button
                        className="conf-step__button conf-step__button-accent"
                        onClick={() => openPopup("add_movie_popup")}
                    >
                        Добавить фильм
                    </button>
                </p>
                <div className="conf-step__movies">
                    {movies.map((movie) => (
                        <div className="conf-step__movie" key={movie.id}>
                            <img
                                className="conf-step__movie-poster"
                                alt="poster"
                                src="i/poster.png"
                            />
                            <h3 className="conf-step__movie-title">
                                {movie.title}
                            </h3>
                            <p className="conf-step__movie-duration">
                                {movie.duration && movie.duration + " минут"}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Дописать !!!!!!!!!!!!! */}
                <div className="conf-step__seances">
                    <div className="conf-step__seances-hall">
                        <h3 className="conf-step__seances-title">Зал 1</h3>
                        <div className="conf-step__seances-timeline">
                            <div
                                className="conf-step__seances-movie"
                                style={{
                                    width: 60 + "px",
                                    backgroundColor: `rgb(133, 255, 137)`,
                                    left: 0,
                                }}
                            >
                                <p className="conf-step__seances-movie-title">
                                    Миссия выполнима
                                </p>
                                <p className="conf-step__seances-movie-start">
                                    00:00
                                </p>
                            </div>
                            <div
                                className="conf-step__seances-movie"
                                style={{
                                    width: 60 + "px",
                                    backgroundColor: `rgb(133, 255, 137)`,
                                    left: 360 + "px",
                                }}
                            >
                                <p className="conf-step__seances-movie-title">
                                    Миссия выполнима
                                </p>
                                <p className="conf-step__seances-movie-start">
                                    12:00
                                </p>
                            </div>
                            <div
                                className="conf-step__seances-movie"
                                style={{
                                    width: 65 + "px",
                                    backgroundColor: `rgb(202, 255, 133)`,
                                    left: 420 + "px",
                                }}
                            >
                                <p className="conf-step__seances-movie-title">
                                    Звёздные войны XXIII: Атака клонированных
                                    клонов
                                </p>
                                <p className="conf-step__seances-movie-start">
                                    14:00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="conf-step__seances-hall">
                        <h3 className="conf-step__seances-title">Зал 2</h3>
                        <div className="conf-step__seances-timeline">
                            <div
                                className="conf-step__seances-movie"
                                style={{
                                    width: 65 + "px",
                                    backgroundColor: `rgb(202, 255, 133)`,
                                    left: 595 + "px",
                                }}
                            >
                                <p className="conf-step__seances-movie-title">
                                    Звёздные войны XXIII: Атака клонированных
                                    клонов
                                </p>
                                <p className="conf-step__seances-movie-start">
                                    19:50
                                </p>
                            </div>
                            <div
                                className="conf-step__seances-movie"
                                style={{
                                    width: 60 + "px",
                                    backgroundColor: `rgb(133, 255, 137)`,
                                    left: 660 + "px",
                                }}
                            >
                                <p className="conf-step__seances-movie-title">
                                    Миссия выполнима
                                </p>
                                <p className="conf-step__seances-movie-start">
                                    22:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <fieldset className="conf-step__buttons text-center">
                    <button className="conf-step__button conf-step__button-regular">
                        Отмена
                    </button>
                    <input
                        type="submit"
                        value="Сохранить"
                        className="conf-step__button conf-step__button-accent"
                    />
                </fieldset>
            </div>
        </section>
    );
}

export default SessionGridContent;
