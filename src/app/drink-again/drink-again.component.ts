import { Component, OnInit } from '@angular/core';
import { WINES } from '../wines'

@Component({
  selector: 'app-drink-again',
  templateUrl: './drink-again.component.html',
  styleUrls: ['./drink-again.component.css', '../category.css']
})
export class DrinkAgainComponent{
  wines = WINES


}
