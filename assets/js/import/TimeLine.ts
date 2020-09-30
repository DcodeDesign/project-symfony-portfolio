export class TimeLine {

    private _elem: string;

    constructor(elem : string) {
        this._elem = elem;
        window.addEventListener("load", (e: Event) => {
            this.elemVisible()
        });
        window.addEventListener("resize", (e: Event) => {
            this.elemVisible()
        });
        window.addEventListener("scroll", (e: Event) => {
            this.elemVisible()
        });
    }

    private elemInScreen (el: any) : boolean  {
        let rect : any = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    public elemVisible() : void {
        let items : any = document.querySelectorAll(this._elem);
        for (let i : number = 0; i < items.length; i++) {
            if (this.elemInScreen (items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }
}