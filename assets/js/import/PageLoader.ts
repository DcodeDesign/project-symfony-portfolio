export class PageLoader{
    public loader () {
        window.addEventListener("load", function(event) {
            document.getElementById('loaderPage').classList.add("hidden");
            document.getElementById('container-page').classList.add("show");
        });
    }
}

