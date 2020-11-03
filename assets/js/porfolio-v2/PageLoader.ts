/*
import {ScrollEffect} from "./ScrollEffect";
import {Navigation} from "./Navigation";
import {Carousel} from "./Carousel";
import {ScrollTo} from "./ScrollTo";
import $ from 'jquery';
import {CalcHeightHeader} from "./CalcHeightHeader";
*/

import {ScrollEffect} from "../porfolio-v2/scrollEffect";

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
        new ScrollEffect();
    }
}

