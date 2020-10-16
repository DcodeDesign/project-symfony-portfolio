export class Navigation {
    constructor() {
        window.addEventListener("load", () => {
            this.show();
        })
    }

    public show ()  {
        let items = document.getElementsByClassName("burger");
        for (let i = 0; i < items.length; i++ ){
            items[i].addEventListener("click", () => {
                    let burger = items[i]
                    let barTop = items[i].getElementsByClassName("bar-top")[0];
                    let barMiddle = items[i].getElementsByClassName("bar-middle")[0];
                    let barBottom = items[i].getElementsByClassName("bar-bottom")[0];
                    burger.classList.add("show");
                    barTop.classList.add("show");
                    barMiddle.classList.add("show");
                    barBottom.classList.add("show");
            })
        }
    }

    public hidden () : void {
        let items = document.getElementsByClassName("burger");
        for (let i = 0; i < items.length; i++ ){
            items[i].addEventListener("click", () => {
                let burger = items[i]
                let barTop = items[i].getElementsByClassName("bar-top")[0];
                let barMiddle = items[i].getElementsByClassName("bar-middle")[0];
                let barBottom = items[i].getElementsByClassName("bar-bottom")[0];
                burger.classList.remove("show");
                barTop.classList.remove("show");
                barMiddle.classList.remove("show");
                barBottom.classList.remove("show");
            })
        }
    }
}