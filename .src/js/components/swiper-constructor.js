import {Swiper} from "../plugins";

function swiperConstructor(element, pagination, navigation, slidesPerView, spaceBetween, sliderPerViewMobile, autoplay = 5000) {
    const elementReplace = element.replace('-swiper', '');
    const options = {};
    if (slidesPerView) {
        options.slidesPerView = slidesPerView;
    }
    if (autoplay) {
        options.autoplay = {
            delay: autoplay
        };
    }
    if (spaceBetween) {
        options.spaceBetween = spaceBetween;
    }
    if (pagination) {
        options.pagination = {
            el: ".swiper-pagination." + elementReplace,
        };
    }
    if (navigation) {
        options.navigation = {
            nextEl: ".swiper-button-next." + elementReplace,
            prevEl: ".swiper-button-prev." + elementReplace,
        };
    }
    options.breakpoints = {
        320:{},
        480:{},
        768: {},
        991: {},
        1280: {}
    };

    switch (slidesPerView) {
        case 5:
            options.breakpoints["1280"] = {
                slidesPerView: slidesPerView
            };
            options.breakpoints["991"] = {
                slidesPerView: 4
            };
            options.breakpoints["768"] = {
                slidesPerView: 3
            };
            options.breakpoints["320"] = {
                slidesPerView: 2
            };
            break;
        case 4:
            options.breakpoints["1280"] = {
                slidesPerView: slidesPerView
            };
            options.breakpoints["991"] = {
                slidesPerView: 3
            };
            options.breakpoints["768"] = {
                slidesPerView: 2
            };
            options.breakpoints["320"] = {
                slidesPerView: 2
            };
            break;
        default:
    }

    if(sliderPerViewMobile){
        options.breakpoints["320"] = {
            slidesPerView: sliderPerViewMobile
        };
    }
    new Swiper("." + element, options);
}

export {swiperConstructor};