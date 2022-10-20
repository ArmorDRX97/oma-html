function dropdown() {
    const dropdown = document.querySelectorAll('.dropdown');
    const dropdownContentAll = document.querySelectorAll('.dropdown-content');
    for (let i = 0; i <= dropdown.length; i++) {
        if(dropdown[i] !== undefined){
            let dropdownContent = dropdown[i].nextElementSibling;
            dropdown[i].addEventListener('click', function (e) {
                dropdown.forEach(drop => {
                    drop.classList.remove('active');
                });
                dropdownContentAll.forEach(drop => {
                    drop.classList.remove('show');
                });
                this.classList.toggle('active');
                dropdownContent.classList.toggle('show');
            });

            document.addEventListener('click', function (event) {
                if (!event.target.closest('.dropdown-content') && !event.target.closest('.dropdown')) {
                    dropdown[i].classList.remove('active');
                    dropdownContent.classList.remove('show');
                }
            });
        }
    }
}

export default dropdown();