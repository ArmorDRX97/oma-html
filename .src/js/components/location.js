function catalogMenu() {
    const regionList = document.querySelectorAll('.location .region li a');
    const ulCities = document.querySelectorAll('.location .city');

    for (let i = 0; i < regionList.length; i++) {
        regionList[i].addEventListener('mouseenter', function () {
            hideAll();
            if (regionList[i].hasAttribute('id')) {
                showCities(regionList[i].getAttribute('id'));
            }
        })
    }

    function showCities(id) {
        for (let i = 0; i < ulCities.length; i++) {
            if (ulCities[i].getAttribute('data-id') === id) {
                ulCities[i].style.display = 'block';
            }
        }
    }

    function hideAll() {
        for (let i = 0; i < ulCities.length; i++) {
            ulCities[i].style.display = 'none';
        }
    }
}

export default catalogMenu();