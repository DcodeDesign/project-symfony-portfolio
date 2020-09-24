//import * as $ from 'jquery';
import '../css/app.scss';

console.log('Hello Webpack Encore! 2');

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
    if(scrollVertical <= 50) {
        console.log(scrollVertical);
        itemNavigation.style.position = "fixed";
    }

};



