export class ScrollLoader {
    public animate(start: number, end: number): void {
        let scrollLoader : any = document.getElementById("loaderScroll");
        let scrollHeight : number = window.scrollY;
        let scrollWidth : number = Math.round((((scrollHeight - start ) / (end - start)) * 100));
        scrollLoader.style.animation = "none";
        scrollLoader.style.background = "linear-gradient(45deg, rgba(57,255,100,1) 0%, rgba(56,250,98,1) " +  scrollWidth  + "%, rgba(4,4,4,1) " +  scrollWidth  + "%, rgba(4,4,4,1) 100%)";
    }
}