import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brewing-method-card',
  templateUrl: './brewing-method-card.component.html',
  styleUrls: ['./brewing-method-card.component.scss']
})
export class BrewingMethodCardComponent {
  @Input() method: any = [];
}
