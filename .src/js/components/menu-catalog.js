function catalogShow() {
    const menuCheckbox = document.getElementById('menu-checkbox');

    menuCheckbox.addEventListener('click', function () {
        if (this.checked) {
            document.body.classList.add('catalog-show');
        } else {
            document.body.classList.remove('catalog-show');
        }
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.catalog') && !event.target.closest('#menu-checkbox') && !event.target.closest('.pre-header') && !event.target.closest('.navbar')) {
            menuCheckbox.checked = false;
            document.body.classList.remove('show');
        }
    });
}

export default catalogShow();