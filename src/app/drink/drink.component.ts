import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent{
  @Input() imageUrl!: string;
  @Input() label!: string;
  @Input() isNew?: boolean;
  @Input() progress?: number;

}
