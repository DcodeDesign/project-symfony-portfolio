export class Dialog {
    constructor() {
        this.anime();
    }

    public anime(): void {
        let dialogContact = document.getElementById('contact');
        let closeDialogContact = document.getElementById('closeDialog');
        let openDialogContact = document.getElementById('openDialog');
        closeDialogContact.addEventListener('click', () => {
            dialogContact.classList.remove('open');
        })

        openDialogContact.addEventListener('click', () => {
            dialogContact.classList.add('open');
        })
    }
}