import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BreedListComponent } from './breed-list/breed-list.component';
import { RandomDogComponent } from './random-dog/random-dog.component';
import { RouterModule } from '@angular/router';
import { DogsComponent } from './dogs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'dogs',
        component: DogsComponent,
        children: [
          { path: '', redirectTo: 'random', pathMatch: 'full' },          
          { path: 'random', component: RandomDogComponent },
          { path: 'breeds', component: BreedListComponent }
        ]
      }
    ])
  ],
  declarations: [
    BreedListComponent,
    RandomDogComponent,
    DogsComponent
  ]
})
export class DogsModule { }
