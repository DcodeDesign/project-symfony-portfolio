/**
 * app.scss
 */
import '../css/app.scss';

/**
 * @import ProgressBarPageHorizontal
 */
import { ProgressBarPageHorizontal } from "./import/ProgressBarPageHorizontal";
let progressBarPageHorizontal = new ProgressBarPageHorizontal();
progressBarPageHorizontal.animate();

/**
 * @import PageLoader
 */
import { PageLoader } from "./import/PageLoader";
let pageLoader = new PageLoader;
pageLoader.loader();
