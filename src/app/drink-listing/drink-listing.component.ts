import { Component } from '@angular/core';
import { WINES } from '../wines';


@Component({
  selector: 'app-drink-listing',
  templateUrl: './drink-listing.component.html',
  styleUrls: ['./drink-listing.component.css'],
})
export class DrinkListingComponent {
  wines = WINES;
}
