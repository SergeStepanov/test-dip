import HallMovie from "@/Components/HallMovie";
import NavBar from "@/Components/NavBar";
import GuestLayout from "@/Layouts/GuestLayout";
import { addZero } from "@/client/helpFunctions";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function UserHomeContent() {
    const { movies } = usePage().props;
    const [sessionsDate, setSessionsDate] = useState(
        `${new Date().getFullYear()}-${addZero(
            new Date().getMonth() + 1
        )}-${addZero(new Date().getDate())}`
    );

    return (
        <GuestLayout>
            <NavBar setSessionsDate={setSessionsDate} />

            <main>
                {movies.length !== 0 &&
                    movies.map((movie, ind) => (
                        <section className="movie" key={movie.id}>
                            <div className="movie__info">
                                <div className="movie__poster">
                                    <img
                                        className="movie__poster-image"
                                        alt="Звёздные войны постер"
                                        src={`/storage/${movie.poster}`}
                                    />
                                </div>
                                <div className="movie__description">
                                    <h2 className="movie__title">
                                        {movie.title}
                                    </h2>
                                    <p className="movie__synopsis">
                                        {movie.description}
                                    </p>
                                    <p className="movie__data">
                                        <span className="movie__data-duration">
                                            {movie.duration} минут
                                        </span>{" "}
                                        <span className="movie__data-origin">
                                            {movie.country}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <HallMovie
                                key={ind}
                                movieId={movie.id}
                                sessionsDate={sessionsDate}
                            />
                        </section>
                    ))}
            </main>
        </GuestLayout>
    );
}
