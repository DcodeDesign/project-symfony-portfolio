export class Carousel {
    constructor() {
        window.addEventListener("load", (e: Event) => {
            this.dimension();
        });
    }

    public dimension () {
        let elem :  any = document.getElementById("carousel");
        let childElem : any = elem.getElementsByTagName("div")[0];
        let childElemTotalHeight :  number =+ childElem[0].offsetHeight;
        let childElemTotalWidth : number = 0;
        let displayNbrElem = 5;

        for(let i = 0; i < childElem.length; i++) {
            childElemTotalWidth = childElemTotalWidth + childElem[i].offsetWidth;
        }

        childElem.style.width = childElemTotalWidth + 'px';
        childElem.style.height = childElemTotalHeight + 'px';

        console.log(childElemTotalWidth, childElemTotalHeight);
    }
}