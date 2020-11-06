export class TimeLine {
    constructor() {
        this.anime();
    }

    public anime(): void {
        let sliderNav = document.getElementById('slider-nav');
        let datetimes = sliderNav.getElementsByClassName('date-time');
        let sliderContent = document.getElementById('slider-content');
        let slides = sliderContent.getElementsByClassName('slide');

        for (let i = 0; i < datetimes.length; i++) {
            datetimes[i].addEventListener('click', (e) => {
                let btnActive = sliderNav.getElementsByClassName('active');
                btnActive[0].classList.remove('active');
                (e.target as Element).classList.add('active');
                let slidesShow = sliderContent.getElementsByClassName('show');
                slidesShow[0].classList.remove('show');
                slides[i].classList.add('show');
            });
        }
    }
}