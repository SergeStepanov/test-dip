// Скрыть показать контент Section
export function hendleToggleHeaderSection({ currentTarget }) {
    currentTarget.classList.toggle("conf-step__header_closed");
    currentTarget.classList.toggle("conf-step__header_opened");
}

// Закрытие модальных окон
export function hendleClosePopupsBtn(evt) {
    evt.preventDefault();

    const popup = document.querySelector(".active");
    if (!popup) return;

    popup.classList.toggle("active");
}

// open popup
export function openPopup(idPopup) {
    document.querySelector(`#${idPopup}`).classList.toggle("active");
}

// переключение статуса кресел в зале
export function toggleStatusSeat(status) {
    switch (status) {
        case "disabled":
            return "standart";
        case "standart":
            return "vip";
        case "vip":
            return "disabled";
        default:
            return;
    }
}
