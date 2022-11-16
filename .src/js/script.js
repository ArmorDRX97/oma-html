import {swiperConstructor} from './components/swiper-constructor';
import './components/dropdown';
import './components/menu-catalog';
import './components/catalog-menu';
import './components/location';
import './components/number-price-formatter';
import './components/theme-switcher';
import './components/grid-list-switcher';
import './components/good-item-swiper';
import './components/badge';

swiperConstructor('banner-swiper', true, true, 1 ,20);
// swiperConstructor('recommended-swiper', true, true, 4, 30);
swiperConstructor('similar-products-swiper', false, true, 5, 30);
swiperConstructor('mini-banner-swiper', true, false, 1,30);
swiperConstructor('popular-categories-swiper', false, true, 5, 30);
swiperConstructor('actual-swiper', true, true, 5, 30);
swiperConstructor('latest-view-swiper', false, true, 4, 30, 1);

