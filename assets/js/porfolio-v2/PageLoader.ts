import {ScrollEffect} from "./scrollEffect";
import {slider} from "./slider";

export class PageLoader {

    constructor() {
        //window.addEventListener("DOMContentLoaded", () => {
            window.addEventListener("load", () => {
                this.loader();
            });
            window.addEventListener("load", () => {
                window.scroll(0, 0);
                document.getElementById('loaderPage').classList.add("hidden");
                document.getElementById('container-page').classList.add("show");
            });

        //});
    }

    public loader(): void {
        new ScrollEffect();
        new slider('skills')
    }
}

