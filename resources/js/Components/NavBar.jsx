import { useState } from "react";
import "@/client/nav";
import classNames from "classnames";
import { dayWeek } from "@/client/helpFunctions";

export default function NavBar({ setSessionsDate }) {
    function listNav() {
        const date = new Date();
        const list = [];

        for (let index = 0; index < 6; index++) {
            let classNav = classNames("page-nav__day", "nav", {
                "page-nav__day_today": index === 0,
                "page-nav__day_chosen": index === 0,
                "page-nav__day_weekend":
                    date.getDay() === 0 || date.getDay() === 6,
            });

            let elem = (
                <a
                    className={classNav}
                    href="#"
                    key={index}
                    onClick={handleClick}
                    data-ses-date={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}
                >
                    <span className="page-nav__day-week">
                        {dayWeek(date.getDay())}
                    </span>
                    <span className="page-nav__day-number">
                        {date.getDate()}
                    </span>
                </a>
            );

            list.push(elem);
            date.setDate(date.getDate() + 1);
        }
        return list;
    }

    function handleClick(e) {
        e.preventDefault();

        if (e.currentTarget.classList.contains("page-nav__day_chosen")) {
            return;
        }

        const prevActiveEl = document.querySelector(".page-nav__day_chosen");
        prevActiveEl.classList.remove("page-nav__day_chosen");
        e.currentTarget.classList.add("page-nav__day_chosen");

        setSessionsDate(e.currentTarget.dataset.sesDate);
    }

    function nextDay(e) {
        e.preventDefault();
        const elemDays = Array.from(document.querySelectorAll(".nav"));

        if (elemDays.at(-1).classList.contains("page-nav__day_chosen")) {
            elemDays.at(-1).classList.remove("page-nav__day_chosen");
            elemDays[0].classList.add("page-nav__day_chosen");
            setSessionsDate(elemDays[0].dataset.sesDate);
            return;
        }

        const prevActiveEl = elemDays.findIndex((i) =>
            i.classList.contains("page-nav__day_chosen")
        );

        elemDays[prevActiveEl].classList.remove("page-nav__day_chosen");

        elemDays[prevActiveEl + 1].classList.add("page-nav__day_chosen");
        setSessionsDate(elemDays[prevActiveEl + 1].dataset.sesDate);
    }

    return (
        <nav className="page-nav">
            {listNav()}
            <a
                className="page-nav__day page-nav__day_next"
                href="#"
                onClick={nextDay}
            ></a>
        </nav>
    );
}
