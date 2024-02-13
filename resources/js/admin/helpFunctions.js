export function hendleToggleHeaderSection({ currentTarget }) {
    currentTarget.classList.toggle("conf-step__header_closed");
    currentTarget.classList.toggle("conf-step__header_opened");
}
