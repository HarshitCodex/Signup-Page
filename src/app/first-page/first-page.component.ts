import { SignUpService } from './first-page.services';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {


  title = "Welcome! Join Us";
  textEntries;
  passwordEntries;
  dateEntries;

  signUpModel = [
    "",
    "",
    "",
    "",
    "",
    ""
  ];
  constructor() { }

  ngOnInit(): void {
    let service = new SignUpService();
    this.textEntries = service.getTextFields();
    this.passwordEntries = service.getPasswordFields();
    this.dateEntries = service.getDateFields();
  }
  signupClicked() {

    let i = 0;
    for (i = 0; i < this.textEntries.length; i++) {
      this.signUpModel[i] = (<HTMLInputElement>(document.getElementById(this.textEntries[i]))).value;
    }
    for (i = 0; i < this.passwordEntries.length; i++) {
      this.signUpModel[this.textEntries.length + i] = (<HTMLInputElement>(document.getElementById(this.passwordEntries[i]))).value;
    }
    this.signUpModel[this.textEntries.length + this.passwordEntries.length] = (<HTMLInputElement>(document.getElementById(this.dateEntries[0]))).value;

    let isRegistrationComplete = true

    for (i = 0; i < this.signUpModel.length; i++) {
      if (this.signUpModel[i] == "") {
        isRegistrationComplete = false;
        break;
      }
    }

    if (isRegistrationComplete) {
      alert("Welcome " + this.signUpModel[2] + "\nWe are happy to see you with us!");
    } else {
      alert("Fill missing details");
    }

  }

}
