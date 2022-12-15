import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

// Details Interface
import { Details } from './appointment-details';

@Component({
  selector: 'app-appointment-modify',
  templateUrl: './appointment-modify.component.html',
  styleUrls: ['./appointment-modify.component.css']
})

export class AppointmentModifyComponent {
  // Initialize variables
  comments: string = "";
  apptUUID: string = "";
  date: string = "";
  apptDetails: Details[];

  /*
    Stackoverflow Solution: https://stackoverflow.com/questions/70745101/angular-13-ngform-viewchild-issue
  */
  @ViewChild('modifyForm', { read: NgForm }) form!: NgForm;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchAppts();
  }

  // Get data from local server
  private fetchAppts() {
    this.http.get('http://localhost:3000/')
      .pipe(map((res) => {
        const apptDetails = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            apptDetails.push({ ...res[key], id: key });
          }
        }

        return apptDetails;
      }))
      .subscribe((res) => {
        this.apptDetails = res;
        console.log(this.apptDetails);
      })
  }

  // Execute form submission
  modifySubmit() {
    console.log(this.form.value.apptModify);

    this.date = moment().format("LLL");
    this.apptUUID = this.form.value.apptModify.uuid;
    this.comments = this.form.value.apptModify.comments;


    const apptUpdate = {
      uuid: this.apptUUID,
      date: this.date,
      comments: this.comments
    }


    // Patch request is sent to update appointment
    this.http.patch(`http://localhost:3000/${apptUpdate.uuid}`, apptUpdate).subscribe((res) => {
      console.log("Response:", res);
    });

    this.form.reset();
  }

}
