import { Component, Input } from '@angular/core';
import { CHIP_TYPE } from '../shared/components/base/chip/chip.component';

const DEFAULT_COFFEE_IMAGE = '../../assets/images/coffee-bag.png';

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss']
})
export class CoffeeCardComponent {
  @Input() title: string;
  @Input() roaster: string;
  @Input() origin: string;
  @Input() imgSrc: string = DEFAULT_COFFEE_IMAGE;
  @Input() imgLabel: string = "Coffee bag";
  CHIP_TYPE = CHIP_TYPE;
}
