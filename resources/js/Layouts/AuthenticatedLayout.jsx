import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Head, Link } from "@inertiajs/react";
import "@/Pages/Admin/AdminPage.css";
import HallAddPopup from "@/Pages/Admin/Modals/HallAddPopup";
import HallDeletePopup from "@/Pages/Admin/Modals/HallDeletePopup";
import MovieAddPopup from "@/Pages/Admin/Modals/MovieAddPopup";
import ShowTimeAddPopup from "@/Pages/Admin/Modals/ShowTimeAddPopup";
import ShowTimeDeletePopup from "@/Pages/Admin/Modals/ShowTimeDeletePopup";

export default function Authenticated({
    children,
    delHall,
    movieId,
    delSession,
}) {
    // const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <Head title="Администраторская" />

            <HallAddPopup />
            <HallDeletePopup delHall={delHall} />
            <MovieAddPopup />
            <ShowTimeAddPopup movieId={movieId} />
            <ShowTimeDeletePopup delSession={delSession} />

            <header
                className="page-header"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <h1 className="page-header__title">
                        Идём<span>в</span>кино
                    </h1>
                    <span className="page-header__subtitle">
                        Администраторская
                    </span>
                </div>
                <div>
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="login__input"
                    >
                        Выйти
                    </Link>
                </div>
            </header>

            <main className="conf-steps">{children}</main>
        </>
    );
}
