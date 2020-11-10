import $ from "jquery";

export  class CopyText {
    constructor(elem: string, idBtnCopy: string) {
        this.copy(elem, idBtnCopy);
    }

    copy(elem: string, idBtnCopy: string): void {
        let btnCopy = document.getElementById(idBtnCopy);
        let CopyMessage = $("#copyMessage")
        btnCopy.addEventListener('click', (e) => {
            let copyText = document.getElementById(elem);
            (copyText as HTMLFormElement).select();
            document.execCommand("copy");
            (CopyMessage as any).addClass('show');
            setTimeout(function() {
                (CopyMessage as any).removeClass('show');
            }, 1200);
        });
    }
}
