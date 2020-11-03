export class ScrollEffect {

    private _elem: string;
    private _rect: any = [];

    constructor() {
        window.addEventListener("scroll", (e: Event) => {
            this.elemVisible();
        });
    }

    public elemVisible(): void {
        console.log(window.scrollY);

        if (window.scrollY >= 0 && window.scrollY <= 150) {
            document.getElementById('bgAnime').classList.remove('scrollEffect');
            document.getElementById('header').classList.remove('scrollEffectStart');
        }

        if (window.scrollY >= 150 ) {
            document.getElementById('bgAnime').classList.add('scrollEffect');
            document.getElementById('header').classList.remove('scrollEffectStart');
        }

        /* header */
        if (window.scrollY >= 250 && window.scrollY <= (400 * 8)) {
            document.getElementById('header').classList.add('scrollEffectStart');
            document.getElementById('route-01').classList.remove('scrollEffectStart');
        }

        /* route-1 */
        if (window.scrollY >= (450 * 8) && window.scrollY <= (600 * 8)) {
            document.getElementById('header').classList.remove('scrollEffectStart');
            document.getElementById('route-01').classList.add('scrollEffectStart');
            document.getElementById('route-02').classList.remove('scrollEffectStart');
        }

        /* route-2 */
        if (window.scrollY >= (650 * 8)  && window.scrollY <= (800 * 8)) {
            document.getElementById('route-01').classList.remove('scrollEffectStart');
            document.getElementById('route-02').classList.add('scrollEffectStart');
            document.getElementById('route-03').classList.remove('scrollEffectStart');
        }

        /* route-3 */
        if (window.scrollY >= (850 * 8)  && window.scrollY <= (1000 * 8)) {
            document.getElementById('route-02').classList.remove('scrollEffectStart');
            document.getElementById('route-03').classList.add('scrollEffectStart');
            document.getElementById('route-04').classList.remove('scrollEffectStart');
        }

        /* route-4 */
        if (window.scrollY >= (1050 * 8)  && window.scrollY <= (1200 * 8)) {
            document.getElementById('route-03').classList.remove('scrollEffectStart');
            document.getElementById('route-04').classList.add('scrollEffectStart');
        }

        /* End */
        if (window.scrollY >= (1250 * 8)  && window.scrollY <= (1400 * 8)) {
            document.getElementById('route-04').classList.remove('scrollEffectStart');

        }

        if (window.scrollY >= (1450 * 8)  && window.scrollY <= (1600 * 8)) {

        }

    }
}