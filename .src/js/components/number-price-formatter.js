function numberPriceFormatter() {
    const curPriceNum = document.querySelectorAll('.price .number');
    const oldPriceNum = document.querySelectorAll('.price .old-price');

    function numberWithSpaces(nr) {
        return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    for (let i = 0; i < curPriceNum.length; i++) {
        curPriceNum[i].innerHTML = numberWithSpaces(curPriceNum[i].innerText);
    }

    for (let i = 0; i < oldPriceNum.length; i++) {
        oldPriceNum[i].innerHTML = numberWithSpaces(oldPriceNum[i].innerText);
    }
}

export default numberPriceFormatter();