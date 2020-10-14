export class Parallax {
    public _elem: string;

    constructor(elemId : string) {
        this._elem = elemId;
        window.addEventListener("load", () => {
            let elem: any;
            elem = document.getElementById(this._elem);
            let _w = window.innerWidth/2;
            let _h = window.innerHeight/2;

            // @ts-ignore
            window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

            window.requestAnimationFrame(() => {
            window.addEventListener("mousemove", (e: Event) => {
                    this.animation(e, elem, _w, _h);
                })
            });
        });
    }

    public animation (e : any, elem : any, _w :  number,_h : number): void {
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _mouseX_w = _mouseX - _w;
            let _mouseY_h = _mouseY - _h;
            let positionX = 50;
            let positionY = 20;
            let _depth1 = this.moveX( positionX, _mouseX_w , 0.01  ) + "% " + this.moveY( positionY, _mouseY_h , 0.01  ) + "%";
            let _depth2 = this.moveX( positionX, _mouseX_w , 0.06  ) + "% " + this.moveY( positionY, _mouseY_h , 0.06  ) + "%";
            let _depth3 = this.moveX( positionX, _mouseX_w , 0.12  ) + "% " + this.moveY( positionY, _mouseY_h , 0.12  ) + "%";
            let _depth4 = this.moveX( positionX, _mouseX_w , 0.16  ) + "% " + this.moveY( positionY, _mouseY_h , 0.16  ) + "%";
            elem.style.backgroundPosition = _depth4 + ", " + _depth3 + ", " + _depth2 + ", " + _depth1;
    }

    public moveX (position : number, mouseX_w : number, speed : number  ) {
       let positionX = position - mouseX_w  * speed;
       if(positionX < 0){
           return 0;
       } else if (positionX > 100){
           return 100;
       }else{
           return positionX;
       }
    }

    public moveY (position : number, mouseY_h: number, speed : number  ) {
        let positionY = position - mouseY_h  * speed;
        if(positionY < 0){
            return 0;
        } else if (positionY > 100){
            return 100;
        }else{
            return positionY;
        }
    }
}