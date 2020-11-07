export class Dialog {
    constructor() {
        this.anime();
    }

    public anime(): void {
        let dialogContact = document.getElementById('contact');
        let closeDialogContact = document.getElementsByClassName('closeDialog');
        let openDialogContact = document.getElementsByClassName('openDialog');

        for (let i = 0; i < closeDialogContact.length; i++) {
            closeDialogContact[i].addEventListener('click', () => {
                dialogContact.classList.remove('open');
            })
        }

        for (let i = 0; i < openDialogContact.length; i++) {
            openDialogContact[i].addEventListener('click', () => {
                dialogContact.classList.add('open');
            })
        }
    }
}