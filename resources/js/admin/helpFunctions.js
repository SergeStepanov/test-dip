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

    popup.classList.remove("active");
}

// open popup
export function openPopup(idPopup) {
    document.querySelector(`#${idPopup}`).classList.add("active");
}

// переключение статуса кресел в зале
export function toggleStatusSeat(status) {
    switch (status) {
        case "disabled":
            status = "standart";
            break;
        case "standart":
            status = "vip";
            break;
        case "vip":
            status = "disabled";
            break;

        default:
            break;
    }
    console.log(status);
}
