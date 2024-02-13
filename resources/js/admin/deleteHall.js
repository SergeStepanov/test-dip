const delButtons = Array.from(document.querySelectorAll('.conf-step__button-trash'));
const delPopup = document.querySelector('[data-open="delete_Hall"]');

delButtons.map(btn => {
    btn.addEventListener('click', function (evt) {
        let id = btn.parentElement.dataset.id;
        let hallName = btn.parentElement.textContent.trim();
        let delForm = delPopup.querySelector('form');

        delPopup.classList.add('active');

        let url = `route('hall.destroy', ${id})`;

        // delForm.setAttribute('action', url);
        // delForm.setAttribute('action', `http://127.0.0.1:8000/hall/${id}`);

        delForm.querySelector('p span').textContent = hallName;

        console.log(id + ' === ' + hallName);
        console.log(delForm.getAttribute('action'));
        console.log(url);
    })
});
