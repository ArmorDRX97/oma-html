import {Swiper} from "../plugins";

function goodItemSwiper() {
    const images = document.querySelectorAll('.good-item-swiper img');
    var swiperGood = new Swiper(".good-item-swiper", {
        loop: true,
        direction: 'vertical',
        spaceBetween: 50,
        slidesPerView: 1,
        pagination: {
            el: ".good-item-swiper-pagination",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 4,
            verticalClass: 'qwerty',
            renderBullet: function (index, className) {
                return '<span class="' + className + '"><img src="' + images[index].src + '"></span>';
            },
        }
    });
}

export default goodItemSwiper();