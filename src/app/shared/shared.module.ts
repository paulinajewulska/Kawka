import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './components/base/heading/heading.component';
import { ButtonComponent } from './components/base/button/button.component';
import { InputComponent } from './components/form/input/input.component';
import { LinkComponent } from './components/base/link/link.component';
import { RouterModule } from '@angular/router';
import { ChipComponent } from './components/base/chip/chip.component';

@NgModule({
  declarations: [
    HeadingComponent,
    ButtonComponent,
    InputComponent,
    LinkComponent,
    ChipComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeadingComponent,
    ButtonComponent,
    InputComponent,
    LinkComponent,
    ChipComponent
  ]
})
export class SharedModule { }
