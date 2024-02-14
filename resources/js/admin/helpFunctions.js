export function hendleToggleHeaderSection({ currentTarget }) {
    currentTarget.classList.toggle("conf-step__header_closed");
    currentTarget.classList.toggle("conf-step__header_opened");
}

export function hendleClosePopupsBtn(evt) {
    evt.preventDefault();

    const popup = document.querySelector(".active");
    if (!popup) return;

    popup.classList.remove("active");
}
