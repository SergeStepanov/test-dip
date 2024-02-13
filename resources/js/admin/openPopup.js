const popups = Array.from(document.querySelectorAll('.popup'));
const btnOpen = Array.from(document.querySelectorAll('.conf-step__button-accent'));

btnOpen.map(btn => {
    btn.addEventListener('click', function (evt) {
        popups.map(popup => {
            if (btn.id === popup.dataset.open) {
                popup.classList.add('active');
            }
        })
    })
});
