import {swiperConstructor} from './components/swiper-constructor';
import './components/dropdown';
import './components/menu-catalog';
import './components/catalog-menu';
import './components/number-price-formatter';
import './components/theme-switcher';
import './components/grid-list-switcher';

swiperConstructor('banner-swiper', true, true);
swiperConstructor('recommended-swiper', true, true, 4, 30);
swiperConstructor('new-swiper', false, true, 4, 30);
swiperConstructor('mini-banner-swiper', true, false);
swiperConstructor('popular-categories-swiper', false, true, 5, 30);
swiperConstructor('actual-swiper', true, true, 4, 30);
swiperConstructor('latest-view-swiper', false, true, 4, 30, 1);