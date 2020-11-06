import {ScrollLoader} from "./ScrollLoader";

export class ScrollEffect {
    private scrollLoader = new ScrollLoader();
    constructor() {
        window.requestAnimationFrame = window.requestAnimationFrame || (window as any).mozRequestAnimationFrame || window.webkitRequestAnimationFrame || (window as any).msRequestAnimationFrame;
        window.requestAnimationFrame(() => {
            window.addEventListener("scroll", () => {
                this.elemVisible();
            });
        });
    }

    public elemVisible(): void {
        if (window.scrollY >= 0 && window.scrollY <= 150) {
            this.scrollLoader.animate(0, 150);
            document.getElementById('bgAnime').classList.remove('scrollEffect');
            document.getElementById('header').classList.remove('scrollEffectStart');
            document.getElementById('intro').classList.remove('hide');
            document.getElementById('titre-route00').classList.remove('show');
            let scrollLoader : any = document.getElementById("loaderScroll");
            scrollLoader.style.animation = "scrollAnime 2s infinite linear";
        }

        if (window.scrollY >= 150) {
            document.getElementById('intro').classList.add('hide');
            document.getElementById('bgAnime').classList.add('scrollEffect');
            document.getElementById('header').classList.remove('scrollEffectStart');
            let scrollLoader : any = document.getElementById("loaderScroll");
            scrollLoader.style.animation = "scrollAnime 2s infinite linear";
        }

        /* header */
        if (window.scrollY >= 250 && window.scrollY <= (400 * 8)) {
            this.scrollLoader.animate(250, (400 * 8));
            document.getElementById('intro').classList.add('scrollEffect');
            document.getElementById('titre-route00').classList.add('show')
            document.getElementById('header').classList.add('scrollEffectStart');
            document.getElementById('route-01').classList.remove('scrollEffectStart');
        }

        /* route-1 */
        if (window.scrollY >= (450 * 8) && window.scrollY <= (600 * 8)) {
            this.scrollLoader.animate((400 * 8), (600 * 8));
            document.getElementById('intro').classList.add('hide');
            document.getElementById('intro').classList.add('hide');
            document.getElementById('header').classList.remove('scrollEffectStart');
            document.getElementById('route-01').classList.add('scrollEffectStart');
            document.getElementById('route-02').classList.remove('scrollEffectStart');
        }

        /* route-2 */
        if (window.scrollY >= (650 * 8) && window.scrollY <= (800 * 8)) {
            this.scrollLoader.animate((600 * 8) , (800 * 8));
            document.getElementById('route-01').classList.remove('scrollEffectStart');
            document.getElementById('route-02').classList.add('scrollEffectStart');
            document.getElementById('route-03').classList.remove('scrollEffectStart');
        }

        /* route-3 */
        if (window.scrollY >= (850 * 8) && window.scrollY <= (1000 * 8)) {
            this.scrollLoader.animate((800 * 8), (1000 * 8));
            document.getElementById('route-02').classList.remove('scrollEffectStart');
            document.getElementById('route-03').classList.add('scrollEffectStart');
            document.getElementById('route-04').classList.remove('scrollEffectStart');
        }

        /* route-4 */
        if (window.scrollY >= (1050 * 8) && window.scrollY <= (1200 * 8)) {
            this.scrollLoader.animate((1000 * 8), (1200 * 8));
            document.getElementById('route-03').classList.remove('scrollEffectStart');
            document.getElementById('route-04').classList.add('scrollEffectStart');
        }

        /* End route */
        if (window.scrollY >= (1250 * 8) && window.scrollY <= (1400 * 8)) {
            this.scrollLoader.animate((1200 * 8), (1400 * 8));
            document.getElementById('titre-route00').classList.remove('show')
            document.getElementById('route-04').classList.remove('scrollEffectStart');
            document.getElementById('bgAnime').classList.remove('scrollEffect2');
            document.getElementById('skills').classList.remove('scrollEffect');
        }

        /* skills */
        if (window.scrollY >= (1450 * 8) && window.scrollY <= (1600 * 10)) {
            this.scrollLoader.animate((1400 * 8), (1600 * 10));
            document.getElementById('bgAnime').classList.add('scrollEffect2');
            document.getElementById('skills').classList.add('scrollEffect');
            document.getElementById('studies').classList.remove('scrollEffect');
            document.getElementById('studies').classList.remove('scrollEffect');
        }

        /* studies */
        if (window.scrollY >= (1650 * 10) && window.scrollY <= (1800 * 10)) {
            this.scrollLoader.animate((1600 * 10), (1800 * 10));
            document.getElementById('skills').classList.remove('scrollEffect');
            document.getElementById('studies').classList.add('scrollEffect');
        }
    }
}