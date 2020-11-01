export class BackgroundAnimate {

    private readonly _velocity: number;

    constructor(elem: string, velocity: number) {
        this._velocity = velocity;
        let item = document.getElementById(elem);
        window.addEventListener("scroll", () => {
            this.animation(item, this._velocity);
        })
    }

    public animation(elem: any, velocity: number): void {
        let pos = window.scrollY;
        let height = (elem.offsetHeight);
        let calc = Math.round((height - pos) * velocity);
        elem.style.backgroundPosition = " 50% " + calc + "px, top";
    };
}