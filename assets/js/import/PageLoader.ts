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
        let sendMessage = $('#sendMessage')
        submitContact.addEventListener('submit', (e) => {
            // e.stopPropagation();
            e.preventDefault();

            $.post(
                '/contact',
                {
                    data : JSON.stringify( $('#contactForm').serializeArray() )
                },
                function(response){

                }, "json");

            (sendMessage as any).addClass('show');
            (sendMessage as any).delay(3200).fadeOut(300);
            (submitContact as any).reset();
        })
    }
}

