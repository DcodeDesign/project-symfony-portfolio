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
        //let _depth1 = `${50 - (_mouseX - _w) * 0.001}% ${20 - (_mouseY - _h) * 0.001}%`;
        let _depth1 = `${50 - (_mouseX - _w) * 0.03}% ${20 - (_mouseY - _h) * 0.03}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.05}% ${20 - (_mouseY - _h) * 0.05}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.08}% ${20 - (_mouseY - _h) * 0.08}%`;
        let _depth4 = `${50 - (_mouseX - _w) * 0.10}% ${20 - (_mouseY - _h) * 0.10}%`;
        let x = `${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }
}