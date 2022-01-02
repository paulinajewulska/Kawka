import { Component, Input } from '@angular/core';

enum COFFEE_TYPE {
  H1 = 'h1',
  H2 = 'h2'
}

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {
  @Input() label: string;
  @Input() type: COFFEE_TYPE = COFFEE_TYPE.H2;

  get isHighestLevelHeading() {
    return this.type === COFFEE_TYPE.H1;
  }
}
