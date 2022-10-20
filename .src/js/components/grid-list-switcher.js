function gridListSwitcher() {
    const catalogList = document.querySelector('.catalog-list');
    if(catalogList){
        const gridAction = document.querySelector('.grid-view.grid');
        const listAction = document.querySelector('.grid-view.list');

        gridAction.addEventListener('click', function () {
            catalogList.classList.remove('list-view');
            this.classList.add('active');
            listAction.classList.remove('active');
        });

        listAction.addEventListener('click', function () {
            catalogList.classList.add('list-view');
            this.classList.add('active');
            gridAction.classList.remove('active');
        });
    }
}

export default gridListSwitcher();