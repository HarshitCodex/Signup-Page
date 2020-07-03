export class SignUpService {

    //Dividing the fields like the text, password and date,
    //for convenience.

    getTextFields() {
        // can be replaced by network call.
        return ["First Name", "Last Name", "Username", "Country"];
    }

    getPasswordFields() {
        return ["Password"];
    }

    getDateFields() {
        return ["Date of Birth"];
    }

}