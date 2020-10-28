import '../css/portfolio.scss';
import { BackgroundAnimate } from "./import/BackgroundAnimate";
import { PageLoader } from "./import/PageLoader";
import { TimeLine } from "./import/TimeLine";
import { Parallax } from "./import/Parallax";
import { Navigation } from "./import/Navigation";
import { CalcHeightHeader } from "./import/CalcHeightHeader";
import { Carousel } from "./import/Carousel";

new PageLoader();
new CalcHeightHeader();
window.addEventListener("load", (e: Event) => {
 new Parallax("parallax_header");
 new BackgroundAnimate("bgAnime", 1.5);
 new TimeLine(".timeline ul li");
 new Navigation();
 new Carousel;
});
/**
 * @import Carousel


 */






