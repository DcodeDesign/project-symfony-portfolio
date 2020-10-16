export class TimeLine {

    private _elem: string;

    constructor(elem : string) {
        this._elem = elem;
        window.addEventListener("load", (e: Event) => {
            let items: any = document.querySelectorAll(this._elem);
            window.addEventListener("resize", (e: Event) => {
                this.elemVisible(items);
            });
            window.addEventListener("scroll", (e: Event) => {
                this.elemVisible(items);
            });
        });
    }

    private elemInScreen (rect: any) : boolean  {
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            (rect.top + 200) <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    public elemVisible(items : any) : void {
        for (let i: number = 0; i < items.length; i++) {
            let rect : any = items[i].getBoundingClientRect();
            if (this.elemInScreen(rect)) {
                items[i].classList.add("in-view");
            }
        }
    }
}