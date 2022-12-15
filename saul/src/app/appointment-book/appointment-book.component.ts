import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { v4 as uuidv4 } from 'uuid';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointment-book',
  templateUrl: './appointment-book.component.html',
  styleUrls: ['./appointment-book.component.css']
})

export class AppointmentBookComponent {
  firstName: string = "";
  lastName: string = "";
  comments: string = "";
  apptUUID: string = "";
  date: string = "";

  /*
    Stackoverflow Solution: https://stackoverflow.com/questions/70745101/angular-13-ngform-viewchild-issue
  */
  @ViewChild('bookForm', { read: NgForm }) form!: NgForm;

  constructor(private http: HttpClient) {
  }

  bookSubmit() {
    this.apptUUID = uuidv4();
    this.date = moment().format("LLL");
    this.firstName = this.form.value.apptDetails.firstName;
    this.lastName = this.form.value.apptDetails.lastName;
    this.comments = this.form.value.apptDetails.comments;

    const apptSummary = {
      uuid: this.apptUUID,
      date: this.date,
      firstName: this.firstName,
      lastName: this.lastName,
      comments: this.comments
    }

    this.http.post('http://localhost:3000/', apptSummary).subscribe((res) => {
      console.log("Response:", res);
    });
    this.form.reset();
  }
}
