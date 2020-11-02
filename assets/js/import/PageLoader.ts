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
        let submitNom = $("#contact_nom");
        let submitEmail = $("#contact_email");
        let submitmessage = $("#contact_message");
        submitContact.addEventListener('submit', (e) => {
            e.stopPropagation();
            e.preventDefault();

            let test = JSON.stringify($('#contactForm').serializeArray())
            let testDecode = JSON.stringify(JSON.parse(test));
            console.log(testDecode);
            $.post(
                '/contact',
                {
                    data : JSON.stringify( $('#contactForm').serializeArray() )
                },
                function(response){
                    if(response.code === 200 && response.success){
                        document.getElementById('sendMessage').classList.add('show');
                        submitNom.val("");
                        submitEmail.val("");
                        submitmessage.val("");
                    }
                    else{
                        document.getElementById('errorMessage').classList.add('show');
                    }
                }, "json");

        })
    }
}

