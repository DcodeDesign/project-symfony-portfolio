/**
 * portfolio.scss
 */
import '../css/portfolio.scss';

/**
 * @import jquery
 */

import $ from 'jquery';

/**
 * @import PageLoader
 */
import { PageLoader } from "./import/PageLoader";
new PageLoader();

/**
 * @import TimeLine
 */
import { TimeLine } from "./import/TimeLine";
new TimeLine(".timeline li");
new TimeLine(".space-ship");


var velocity = 0.5;
function update(){
    console.log($('.timeline'));
    let pos = $(window).scrollTop();
    $('.timeline').each(function() {
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-18;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
    });
};

function parallax() {
    document.addEventListener("mousemove", parallax);
    let elem: any;
    elem = document.getElementById("parallax");
    function parallax(e : any) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }
}

window.addEventListener("load", function(event) {
    window.onscroll =  update ;
    parallax();
});

