export class ProgressBarPageHorizontal {

    constructor() {
        window.addEventListener("load", (e: Event) => {
            window.addEventListener("scroll", (e: Event) => {
                this.animate()
            })
        })
    }

    public animate() {
        let itemMyBar : any = document.getElementById("myBar");
        let scrollHeight : number = window.innerHeight
        let scrollVertical: number = window.pageYOffset ;
        let bodyHeight : number = document.body.clientHeight;
        let scrollWidth : number = ((scrollVertical / (bodyHeight - scrollHeight))*100);
        itemMyBar.style.width = scrollWidth + "%";
    }
}