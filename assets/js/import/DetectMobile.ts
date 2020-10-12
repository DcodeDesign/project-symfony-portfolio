export class DetectMobile {

    public constructor(){
        window.addEventListener("resize", (e: Event) => {
            this.DeviceAndWithWindow();
        });

    }

    public detectDevice () : boolean {
        let check = false;

        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            check = true;
            return check;
        } else if (
            /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                ua
            )
        ) {
            check = true;
            return check;
        }
        check = false;
        return check;
    }

    public widthDevice () : boolean  {
        let check : boolean = false;
        let windowWidth = window.innerWidth;

        if (windowWidth == 800) {
            check = true;
        }
        return check;
    }

    public DeviceAndWithWindow () {
        let check : boolean = false
        let device : boolean = this.detectDevice();
        let windowWidth = this.widthDevice();
        if(device) {
            check = true
            console.log("Mobile");
            return check;
        }  else if (windowWidth)  {
            check = true
            console.log("Small window");
            return check;
        } else {
            console.log("Large window");
            return check;
        }
    }

}