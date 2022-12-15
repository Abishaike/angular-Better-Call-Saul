import { Component, Input } from '@angular/core';
import { Details } from '../appointment-details';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})

export class DetailsTableComponent {

  /* 
    Input Decorator is used to extract "apptDetails" from the Parent
    Within the child, the array has been initialized to an empty array
  */
  @Input() apptDetailsC: Details[] = [];
}
