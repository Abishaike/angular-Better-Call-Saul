import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Details Interface
import { Details } from './appointment-details';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})

export class AppointmentDetailsComponent implements OnInit {
  apptDetails: Details[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchAppts();
  }

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
      })
  }
}
