import { Component } from '@angular/core';
import { heroContent } from '../goliath';


@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.css']
})
export class MainImageComponent {
  heroContent = heroContent
}
