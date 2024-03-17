import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import NavLink from "./NavLink";

export default function NavBar() {
    const { url, component } = usePage();
    const [date, setDate] = useState(new Date());

    console.log(url, component, date.getDate());

    return (
        <nav className="page-nav">
            <NavLink
                className="page-nav__day page-nav__day_today"
                href="#0"
                active
            >
                <span className="page-nav__day-week">Пн</span>
                <span className="page-nav__day-number">31</span>
            </NavLink>

            <NavLink className={"page-nav__day"} href="#">
                <span className="page-nav__day-week">Вт</span>
                <span className="page-nav__day-number">1</span>
            </NavLink>

            <NavLink className="page-nav__day" href="#">
                <span className="page-nav__day-week">Ср</span>
                <span className="page-nav__day-number">2</span>
            </NavLink>

            <NavLink className="page-nav__day" href="#">
                <span className="page-nav__day-week">Чт</span>
                <span className="page-nav__day-number">3</span>
            </NavLink>

            <NavLink className="page-nav__day" href="#">
                <span className="page-nav__day-week">Пт</span>
                <span className="page-nav__day-number">4</span>
            </NavLink>

            <NavLink className="page-nav__day page-nav__day_weekend" href="#">
                <span className="page-nav__day-week">Сб</span>
                <span className="page-nav__day-number">5</span>
            </NavLink>

            <Link className="page-nav__day page-nav__day_next" href="#"></Link>
        </nav>
    );
}
