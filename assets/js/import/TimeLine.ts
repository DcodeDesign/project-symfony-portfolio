export class TimeLine {

    private _elem: string;
    private _rect: any = [];

    constructor(elem: string) {
        this._elem = elem;
        let items: any = document.querySelectorAll(this._elem);
        for (let i: number = 0; i < items.length; i++) {
            this._rect[i] = items[i].getBoundingClientRect().top;
        }
        window.addEventListener("resize", (e: Event) => {
            this.elemVisible(this._rect, items);
        });

        window.addEventListener("scroll",  (e: Event) => {
            console.log('ici');
            this.elemVisible(this._rect, items);
        });
    }

    private elemInScreen(rect: any, items: any): boolean {
        // return ((rect - items.offsetHeight) <= (window.scrollY - (screen.height / 2)));
        return ((rect) <= (window.scrollY + (screen.height)));
    }

    public elemVisible(array: any, items: HTMLCollection): void {
        for (let i: number = 0; i < array.length; i++) {
            if (this.elemInScreen(array[i], items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }
}