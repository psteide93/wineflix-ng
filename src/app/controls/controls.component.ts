import { Component, OnInit } from '@angular/core';
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  faPlay = faPlay
  faInfoCircle = faInfoCircle
  title = 'angular-template'

  constructor() { }

  ngOnInit(): void {
  }

}
