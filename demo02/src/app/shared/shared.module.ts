import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomImageComponent } from './random-image/random-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RandomImageComponent],
  exports: [
    RandomImageComponent
  ]
})
export class SharedModule { }
