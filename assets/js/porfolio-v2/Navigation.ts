export class Navigation {
    private closeIs = false;
    constructor() {
        this.show();
    }

    public show ()  {
        let items = document.getElementsByClassName("burger");
        let closeMenu = document.getElementsByClassName("closeMenu");
        let nav = document.getElementsByClassName("nav");

        window.addEventListener('scroll', () => {
            if(window.scrollY >= screen.height) {
                items[0].classList.add("show");
            } else {
                items[0].classList.remove("show");
            }
        })

        for(let i = 0; i < closeMenu.length; i++){
            closeMenu[i].addEventListener("click", () => {
                if (!this.closeIs){
                    items[0].classList.add("close");
                    nav[0].classList.add("show");
                    this.closeIs =  true;
                } else {
                    items[0].classList.remove("close");
                    nav[0].classList.remove("show");
                    this.closeIs =  false;
                }

            })
        }

        items[0].addEventListener("click", () => {
            if (!this.closeIs){
                items[0].classList.add("close");
                nav[0].classList.add("show");
                this.closeIs =  true;
            } else {
                items[0].classList.remove("close");
                nav[0].classList.remove("show");
                this.closeIs =  false;
            }

        })

    }

    public hidden () : void {
        let items = document.getElementsByClassName("burger");
        for (let i = 0; i < items.length; i++ ){
            items[i].addEventListener("click", () => {
                let burger = items[i]
                let barTop = items[i].getElementsByClassName("bar-top")[0];
                let barMiddle = items[i].getElementsByClassName("bar-middle")[0];
                let barBottom = items[i].getElementsByClassName("bar-bottom")[0];
                burger.classList.remove("close");
                barTop.classList.remove("close");
                barMiddle.classList.remove("close");
                barBottom.classList.remove("close");
            })
        }
    }
}