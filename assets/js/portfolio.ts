/**
 * portfolio.scss
 */
import '../css/portfolio.scss';

/**
 * @import PageLoader
 */
import { PageLoader } from "./import/PageLoader";
new PageLoader();


/**
 * @import TimeLine
 */
import { TimeLine } from "./import/TimeLine";
new TimeLine(".timeline ul li");


/**
 * @import BackgroundAnimate
 */
import { BackgroundAnimate } from "./import/BackgroundAnimate";
new BackgroundAnimate(".bg");


/**
 * @import Parallax
 */
import { Parallax } from "./import/Parallax";
new Parallax("parallax_header");
new Parallax("parallax_intro");

/**
 * @import Navigation
 */
import { Navigation } from "./import/Navigation";
new Navigation();


/**
 * @import Carousel

 import { Carousel } from "./import/Carousel";
 new Carousel;
 */



