export class CalcHeightHeader {
    constructor() {
        window.addEventListener('scroll', () => {
            setTimeout(() => {
                this.calcMarginTop();
            }, 1500)
        })
        this.calcMarginTopOnResize();
    }

    public calcMarginTop(): void {
        let callToAction : HTMLElement = document.getElementById("callToAction");
        callToAction.style.marginTop = (this.calcHeight()) + "px";
    }

    private calcHeight(): number {
        let Timeline: HTMLElement = document.getElementById("timeLine");
        let header : HTMLElement = document.getElementById("header");
        let TimelineHeight: number = Timeline.offsetHeight;
        let TimelineMarginTop: number = Timeline.offsetTop;
        let headerH: number = header.offsetHeight;
        let calc = (TimelineHeight + TimelineMarginTop) - headerH  ;
        console.log(calc);
        let result : number;
        if(calc > 0) {
            result = calc;
        } else {
            result = 0;
        }
        return result;
    }

    private calcMarginTopOnResize (): any {
        window.addEventListener("resize", () => {
            this.calcMarginTop();
        });
    }
}