function catalogMenu() {
    const fLvlList = document.querySelectorAll('.catalog .first-level li a');
    const sLvl = document.querySelectorAll('.catalog .second-level');
    const sLvlAll = document.querySelectorAll('.catalog #second-level-block li a');
    const tLvl = document.querySelectorAll('.catalog .third-level');


    for (let i = 0; i < fLvlList.length; i++) {
        const id = fLvlList[i].getAttribute('id');
        document.getElementById(id).addEventListener('mouseenter', function () {
            hideAll(sLvl);
            hideAll(tLvl);
            showNext(id);
        })
    }

    for (let i = 0; i < sLvlAll.length; i++) {
        const id = sLvlAll[i].getAttribute('id');
        document.getElementById(id).addEventListener('mouseenter', function () {
            hideAll(tLvl);
            showNext(id);
        })
    }

    function showNext(id) {
        const el = document.querySelector('[parent-id=' + id + ']');
        el.style.display = 'block';
    }

    function hideAll(list) {
        for (let i = 0; i < list.length; i++) {
            list[i].style.display = 'none';
        }
    }
}

export default catalogMenu();