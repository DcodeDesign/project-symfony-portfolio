import {TimeLine} from "./TimeLine";
import {Navigation} from "./Navigation";
import {Carousel} from "./Carousel";
import {ScrollTo} from "./ScrollTo";

export class PageLoader{

    constructor() {
        window.addEventListener("DOMContentLoaded", () => {
            window.addEventListener("load", () => {
                this.loader();
            });
            window.addEventListener("load", () => {
                document.getElementById('loaderPage').classList.add("hidden");
                document.getElementById('container-page').classList.add("show");
            });

        });
    }

    public loader () :void {
        // new TimeLine(".timeline ul li");
        new Navigation();
        new Carousel;
        new ScrollTo;
    }
}

