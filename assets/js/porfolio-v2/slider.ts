export class slider {
    constructor(idElement : string) {
        let sliderSkills = document.getElementById(idElement);
        let sliderSkillsNav = sliderSkills.getElementsByClassName("skills-nav")[0];
        this.anime(sliderSkillsNav, sliderSkills);
    }

    private anime(classElement: Element, Elem: Element ) {
        let btnSkills = classElement.getElementsByClassName("skills-nav-btn");
        let idName = Elem.getElementsByClassName('active')[0].getAttribute('id');
        let nextElem = document.getElementById(`${idName}`).nextElementSibling;
        let previousElem = document.getElementById(`${idName}`).previousElementSibling;

        if (nextElem !== undefined) {
            btnSkills[1].innerHTML = nextElem.getElementsByTagName('h2')[0].innerText;
            (btnSkills[1] as HTMLAnchorElement).href = `#${nextElem.id}`;
        }

        if (previousElem !== undefined) {
            btnSkills[0].innerHTML = previousElem.getElementsByTagName('h2')[0].innerText;
            (btnSkills[0] as HTMLAnchorElement).href = `#${previousElem.id}`
        }

        for (let i = 0; i < btnSkills.length; i++) {
            btnSkills[i].addEventListener('click', (e) => {
                console.log(e);
                e.preventDefault()
                let sliderSkills = document.getElementById("skills");
                let sliderSkillsActive = sliderSkills.getElementsByClassName("active")[0];
                sliderSkillsActive.classList.remove('active');
                let elemShow = (btnSkills[i] as HTMLAnchorElement).href.split("#").pop();
                document.getElementById(`${elemShow}`).classList.add('active')

                let nextElem = document.getElementById(`${elemShow}`).nextElementSibling;
                let previousElem = document.getElementById(`${elemShow}`).previousElementSibling;
                console.log(nextElem, previousElem);

                if (nextElem !== null) {
                    btnSkills[1].innerHTML = nextElem.getElementsByTagName('h2')[0].innerText;
                    (btnSkills[1] as HTMLAnchorElement).href = `#${nextElem.id}`;
                    (btnSkills[1] as HTMLAnchorElement).style.opacity = '1';
                } else {
                    (btnSkills[1] as HTMLAnchorElement).style.opacity = '0';
                }

                if (previousElem !== null) {
                    (btnSkills[0] as HTMLAnchorElement).innerHTML = previousElem.getElementsByTagName('h2')[0].innerText;
                    (btnSkills[0] as HTMLAnchorElement).href = `#${previousElem.id}`;
                    (btnSkills[0] as HTMLAnchorElement).style.opacity = '1';
                } else {
                    (btnSkills[0] as HTMLAnchorElement).style.opacity = '0';
                }
            })
        }
    }
}


