import { hendleToggleHeaderSection, openPopup } from "@/admin/helpFunctions";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

function SessionGridContent({ setMovieId, setDelSession }) {
    const { movies, sessions } = usePage().props;

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
                        <div
                            className="conf-step__movie"
                            key={movie.id}
                            onClick={() => {
                                setMovieId(movie.id);

                                openPopup("add_show_time");
                            }}
                        >
                            <img
                                className="conf-step__movie-poster"
                                alt="poster"
                                src={`/storage/${movie.poster}`}
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
                {sessions.length !== 0 && (
                    <div className="conf-step__seances">
                        {sessions.map((item, ind) => item.sessions.length !== 0 && (
                            <div
                                className="conf-step__seances-hall"
                                key={item.id}
                            >
                                <h3 className="conf-step__seances-title">
                                    {item.name}
                                </h3>
                                <div className="conf-step__seances-timeline">
                                    {item.sessions.map((elem, index) => (
                                        <div
                                            key={elem.id}
                                            className="conf-step__seances-movie"
                                            style={{
                                                width: 60 + "px",
                                                backgroundColor: `rgb(133, 255, 137)`,
                                                left: index * 60,
                                                cursor: "pointer",
                                            }}
                                            onClick={(e) => {
                                                setDelSession(elem);

                                                openPopup("delete_show_time");
                                            }}
                                        >
                                            <p className="conf-step__seances-movie-title">
                                                {elem.movie.title}
                                            </p>
                                            <p className="conf-step__seances-movie-start">
                                                {elem.start_time}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
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
        </section>
    );
}

export default SessionGridContent;
