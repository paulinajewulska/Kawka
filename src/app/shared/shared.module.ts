import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './components/base/heading/heading.component';
import { ButtonComponent } from './components/base/button/button.component';

@NgModule({
  declarations: [
    HeadingComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeadingComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
