export class Thomas_Gravy {

    private readonly _job: boolean = true;
    private readonly _frontEndDeveloper: boolean = true;
    private readonly _meetingTime: any;
    private message: string;

    constructor (_job : boolean, _frontEndDeveloper  : boolean, _yourDate: any) {
        this._job = true;
        this._frontEndDeveloper = true;
        this._meetingTime = _yourDate;

        this.you_need_a_developer(this._job, this._frontEndDeveloper, this._meetingTime);
    }

    public you_need_a_developer (job: boolean, frontEndDeveloper: boolean , meetingTime: any) : string {

        if ( job && frontEndDeveloper ) {

            let meetingTime = "";
            let message = "Je suis impatient de vous rencontrer";
            return this.message + "le " + meetingTime;

        } else {
            return this.message = "Veuillez réessayer";
        }
    }
}