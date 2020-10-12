import $ from "jquery";

export class BackgroundAnimate {
    private _elem: string;

    constructor(elem : string) {
        this._elem = elem;
        window.addEventListener("load", (e: Event) => {
            window.addEventListener("scroll", (e: Event) => {
                this.animation();
            })
        });
    }

    public animation (): void {
        let velocity = 3.5;
        let pos = $(window).scrollTop();
        $(this._elem).each(function() {
            let $element = $(this);
            let height = $element.height()-18;
            $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
        });

    }
}