//import * as $ from 'jquery';
export class ProgressBarPageHorizontal {

    public animate() {
        window.onscroll = function () {
        let itemMyBar = document.getElementById("myBar");
        let scrollHeight = window.innerHeight
        let scrollVertical: number = window.pageYOffset ;
        let bodyHeight : number = document.body.clientHeight;
        let scrollWidth = ((scrollVertical / (bodyHeight - scrollHeight))*100);
        itemMyBar.style.width = scrollWidth + "%";
        }
    }

    /*
    window.onscroll = function () {
        let itemTimeLine = document.getElementById("time-line");
        let itemMyBar = document.getElementById("myBar");
        let itemNavigation =  document.getElementById("navigation");
        let scrollHeight = window.innerHeight
        let scrollVertical: number = window.pageYOffset ;
        let bodyHeight : number = document.body.clientHeight;
        let scrollWidth = ((scrollVertical / (bodyHeight - scrollHeight))*100);
        itemTimeLine.style.height = scrollWidth + "%";
        itemMyBar.style.width = scrollWidth + "%";
        console.log(scrollVertical)
        if(scrollVertical = 150) {
            console.log(scrollVertical);
            itemNavigation.style.position = "fixed";
        } else {
            itemNavigation.style.position = "relative";
        }
    };
    */
}