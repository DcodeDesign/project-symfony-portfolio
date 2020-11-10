import {ScrollEffect} from "./scrollEffect";
import {Slider} from "./Slider";
import {Dialog} from "./Dialog";
import {TimeLine} from "./TimeLine";
import {Navigation} from "./Navigation";
import {Message} from "./Message";
import {CopyText} from "./CopyText";

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
        new Message();
        new CopyText('textCopy', 'btnCopy');
    }
}

