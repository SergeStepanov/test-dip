import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function HallMovie({ movieId, sessionsDate }) {
    const { hallsActive } = usePage().props;
    const [halls, setHalls] = useState([]);

    useEffect(() => {
        setHalls(
            (prev) =>
                (prev = hallsActive.filter((hall) =>
                    hall.sessions.find((session) => session.movie_id == movieId)
                ))
        );
    }, [hallsActive]);

    return (
        <>
            {halls.length !== 0 &&
                halls.map((hall, ind) => (
                    <div className="movie-seances__hall" key={hall.id}>
                        <h3 className="movie-seances__hall-title">
                            {hall.name}
                        </h3>
                        <ul className="movie-seances__list">
                            {hall.sessions &&
                                hall.sessions
                                    .filter(
                                        (session) => session.movie_id == movieId
                                    )
                                    .map((session) => (
                                        <li
                                            className="movie-seances__time-block"
                                            key={session.id}
                                        >
                                            <Link
                                                className="movie-seances__time"
                                                href={route('hallpage', {'id': session.id, 'date': sessionsDate})}
                                            >
                                                {session.start_time}
                                            </Link>
                                        </li>
                                    ))}
                        </ul>
                    </div>
                ))}
        </>
    );
}
