export class PageLoader{

    constructor() {
        window.addEventListener("DOMContentLoaded", (e: Event) => {
            window.addEventListener("load", (e: Event) => {
                this.loader();
            });
        });
    }

    public loader () :void {
        document.getElementById('loaderPage').classList.add("hidden");
        document.getElementById('container-page').classList.add("show");
    }
}

