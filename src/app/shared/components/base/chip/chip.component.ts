import { Component, Input } from '@angular/core';

export enum CHIP_TYPE {
  ROASTER = 'roaster',
  ORIGIN = 'origin'
}

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() label: string;
  @Input() type = CHIP_TYPE.ROASTER;

  get isOriginType() {
    return this.type === CHIP_TYPE.ORIGIN;
  }
}
