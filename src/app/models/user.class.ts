export class User {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: any;
    street: string;
    postCode: number;
    city: string;

    constructor(obj? : any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.postCode = obj ? obj.postCode : '';
        this.city = obj ? obj.city : '';
    }

    /**
     * This function/method returns a JSON with the data from inputfields in the add-user-dialog.
     */
    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            postCode: this.postCode,
            city: this.city  
        };
    }


}