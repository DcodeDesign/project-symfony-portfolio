import {ScrollEffect} from "./scrollEffect";
import {Slider} from "./Slider";
import {Dialog} from "./Dialog";
import {TimeLine} from "./TimeLine";
import {ScrollTo} from "./ScrollTo";
import {Navigation} from "./Navigation";

export class PageLoader {

    constructor() {
        window.addEventListener("DOMContentLoaded", () => {
            window.addEventListener("load", () => {
                this.loader();
            });
            window.addEventListener("load", () => {
                window.scroll(0, 0);
                document.getElementById('loaderPage').classList.add("hidden");
                document.getElementById('container-page').classList.add("show");
            });

        });
    }

    public loader(): void {
        new ScrollEffect();
        new Navigation();
        new Slider('skills');
        new TimeLine();
        new Dialog();
    }
}

