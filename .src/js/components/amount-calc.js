function amountCalc() {
    const amountBlock = document.querySelectorAll('.amount-calc');
    amountBlock.forEach(item => {
        let input = item.children[1];
        let minus = item.children[0];
        let plus = item.children[2];
        let inputNumber = parseInt(input.value);
        if (!inputNumber || inputNumber < 1) {
            input.value = 1;
        }
        input.addEventListener('focusout', (e) => {
            let number = parseInt(e.target.value);
            if (!number || number < 1) {
                e.target.value = 1;
            }
        });
        minus.addEventListener('click', () => {
            if(input.value > 1){
                input.value--;
            }
        });
        plus.addEventListener('click', () => {
            input.value++;
        });

    });
}

export default amountCalc();