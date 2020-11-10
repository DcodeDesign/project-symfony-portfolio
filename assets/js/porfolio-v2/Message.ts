import $ from "jquery";

export class Message {

    constructor() {
        this.sendMessage();
    }

    sendMessage(): void {
        let submitContact = document.getElementById("contactForm");
        let btnContact = document.getElementById("contact_envoyer");
        let inputNom = document.getElementById("contact_nom");
        let inputMail = document.getElementById("contact_email");
        let inputMessage = document.getElementById("contact_message");
        let sendMessage = $('#sendMessage')
        submitContact.addEventListener('submit', (e) => {
            (inputNom as HTMLFormElement).value = "";
            (inputMail as HTMLFormElement).value = "";
            (inputMessage as HTMLFormElement).value = "";
            e.preventDefault();
            /*$.post(
                '/contact',
                {
                    data: JSON.stringify($('#contactForm').serializeArray())
                },
                function (response) {
                    console.log( "success" );
                    (sendMessage as any).addClass('show');
                    (sendMessage as any).delay(4200).fadeOut(300);
                    (submitContact as any).reset();
                }
                , "json")
                .done(function () {
                    console.log("second success");
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    console.log("finished");
                });*/
            (sendMessage as any).addClass('show');
            setTimeout(function() {
                (sendMessage as any).removeClass('show');
            }, 2800);
        });
    }
}