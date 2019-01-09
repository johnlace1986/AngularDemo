import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RandomCatComponent } from './random-cat/random-cat.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'cats', component: RandomCatComponent }
    ])
  ],
  declarations: [RandomCatComponent]
})
export class CatsModule { }
