import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentBookComponent } from './appointment-book/appointment-book.component';
import { AppointmentModifyComponent } from './appointment-modify/appointment-modify.component';
import { AppointmentDeleteComponent } from './appointment-delete/appointment-delete.component';
import { RosterComponent } from './roster/roster.component';

import { MatCardModule } from '@angular/material/card';
import { DetailsTableComponent } from './appointment-details/details-table/details-table.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppointmentDetailsComponent,
    HomeComponent,
    AppointmentBookComponent,
    AppointmentModifyComponent,
    AppointmentDeleteComponent,
    RosterComponent,
    DetailsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'roster', component: RosterComponent },
      { path: 'details', component: AppointmentDetailsComponent },
      { path: 'book', component: AppointmentBookComponent },
      { path: 'modify', component: AppointmentModifyComponent },
      { path: 'delete', component: AppointmentDeleteComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
