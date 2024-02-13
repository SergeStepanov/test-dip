const days = Array.from(document.querySelectorAll(".page-nav__day"));

if (days.length) {
    days[0].classList.add("page-nav__day_today");
    days[0].classList.add("page-nav__day_chosen");
}

// Выходные дни
days.forEach((element) => {
    if (element.classList.contains("page-nav__day_next")) {
        return;
    }

    let dayWeek = element.firstElementChild.textContent.trim();

    if (dayWeek === "Сбт" || dayWeek === "Вск") {
        element.classList.add("page-nav__day_weekend");
    }
});
