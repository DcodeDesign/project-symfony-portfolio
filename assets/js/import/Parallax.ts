export class Parallax {
    public _elem: string;

    constructor(elemId : string) {
        this._elem = elemId;
        window.addEventListener("load", () => {
            let elem: any;
            elem = document.getElementById(this._elem);
            let _w = window.innerWidth/2;
            let _h = window.innerHeight/2;
            window.addEventListener("mousemove", (e: Event) => {
                requestAnimationFrame( () => {
                    this.animation(e, elem, _w, _h)
                });
            })
        });

    }

    public animation (e : any, elem : any, _w :  number,_h : number): void {
        setTimeout(() => {
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${20 - (_mouseY - _h) * 0.01}%`;
            let _depth2 = `${50 - (_mouseX - _w) * 0.03}% ${20 - (_mouseY - _h) * 0.02}%`;
            let _depth3 = `${50 - (_mouseX - _w) * 0.04}% ${20 - (_mouseY - _h) * 0.04}%`;
            let _depth4 = `${50 - (_mouseX - _w) * 0.08}% ${20 - (_mouseY - _h) * 0.08}%`;
            elem.style.backgroundPosition = `${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
        },700);
    }
}