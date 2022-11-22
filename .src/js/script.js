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
import './components/tabs';

swiperConstructor('banner-swiper', true, true, 1 ,20, false, false);
swiperConstructor('similar-products-swiper', false, true, 5, 30, false, false);
swiperConstructor('mini-banner-swiper', true, false, 1,30, false, 5000);
swiperConstructor('popular-categories-swiper', false, true, 5, 30, false, false);
swiperConstructor('actual-swiper', true, true, 5, 30, false, false);
swiperConstructor('latest-view-swiper', false, true, 4, 30, 1, false);