export class Parallax {
    private _elem: string;

    constructor(elemId : string) {
        this._elem = elemId;
        window.addEventListener("load", (e: Event) => {
            window.addEventListener("mousemove", (e: Event) => {
                this.animation(e);
            })
        });
    }

    public animation (e : any): void {
        let elem: any;
        elem = document.getElementById(this._elem);
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