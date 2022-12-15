import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Details Interface
import { Details } from './appointment-details';

@Component({
  selector: 'app-appointment-delete',
  templateUrl: './appointment-delete.component.html',
  styleUrls: ['./appointment-delete.component.css']
})
export class AppointmentDeleteComponent {
  // Initialize variables
  apptUUID: string = "";
  apptDetails: Details[];
  mikeImgURL: string = './assets/img/delete/mike.jpg';
  saulImgURL: string = './assets/img/delete/saul.jpg';
  saulImg2URL: string = './assets/img/delete/saul2.jpg';
  logoImgURL: string = './assets/img/delete/logo.png';
  /*
  Stackoverflow Solution: https://stackoverflow.com/questions/70745101/angular-13-ngform-viewchild-issue
  */
  @ViewChild('deleteForm', { read: NgForm }) form!: NgForm;

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
  deleteSubmit() {
    console.log(this.form.value.apptDelete);
    this.apptUUID = this.form.value.apptDelete.uuid;



    // Delete request is sent to delete appointment
    this.http.delete(`http://localhost:3000/${this.apptUUID}`).subscribe((res) => {
      console.log("Response:", res);
    });

    this.form.reset();
  }

}
