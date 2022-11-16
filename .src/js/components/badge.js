function badge() {
    const badges = document.querySelectorAll('[badge]');
    for(let i = 0; i < badges.length; i++){
        badges[i].classList.add('badge');
        if(badges[i].getAttribute('badge') > 0){
            badges[i].classList.add('badge-active');
        }
    }

}

export default badge();