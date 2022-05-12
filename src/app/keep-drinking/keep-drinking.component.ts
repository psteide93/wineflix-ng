import { Component, OnInit } from '@angular/core';
import { wines } from '../keep-drinking-wines'

@Component({
  selector: 'app-keep-drinking',
  templateUrl: './keep-drinking.component.html',
  styleUrls: ['./keep-drinking.component.css', '../category.css']
})
export class KeepDrinkingComponent {

  wines = wines

  constructor() { }


}
