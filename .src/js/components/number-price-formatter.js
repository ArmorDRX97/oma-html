function replacePrice(element, color) {
    const string = element.innerText;
    const number = parseInt(string.match(/(\d+)/)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    const currency = string.slice(-1);
    if (isNaN(parseInt(currency))) {
       if(color){
           element.innerHTML = `${number} <span style="color: ${color}">${currency}</span>`;
       } else{
           element.innerHTML = `${number} <span>${currency}</span>`;
       }
    }
    if (!isNaN(parseInt(currency))) {
        element.innerHTML = number;
    }
}


function numberPriceFormatter() {
    const elements = document.querySelectorAll('[data-formatter]');
    if (elements) {
        elements.forEach(item => {
            const color = item.getAttribute('data-color');
            replacePrice(item, color);
        })
    }
}


export default numberPriceFormatter();