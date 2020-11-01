import {TimeLine} from "./TimeLine";
import {Navigation} from "./Navigation";
import {Carousel} from "./Carousel";
import {ScrollTo} from "./ScrollTo";
import $ from 'jquery';
import {CalcHeightHeader} from "./CalcHeightHeader";

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
        new TimeLine(".timeline ul li");
        new Navigation();
        new Carousel;
        new ScrollTo;
        new CalcHeightHeader();

        let submitContact = document.getElementById("contactForm");
        submitContact.addEventListener('submit', (e) => {
            e.stopPropagation();
            e.preventDefault();

            $.ajax({
                type: "post",
                url: "http://127.0.0.1:8000/",
                data: $('contactForm').serialize(),
                success: function(result){
                   console.log("Send message");
                }
            });

        })
    }
}

