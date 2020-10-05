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
new TimeLine(".timeline li");

/**
 * @import BackgroundAnimate
 */
import { BackgroundAnimate } from "./import/BackgroundAnimate";
new BackgroundAnimate(".timeline");

/**
 * @import BackgroundAnimate
 */
import { Parallax } from "./import/Parallax";
new Parallax("parallax");
new Parallax("parallax2");

/**
 * @import Navigation
 */
import { Navigation } from "./import/Navigation";
new Navigation();



