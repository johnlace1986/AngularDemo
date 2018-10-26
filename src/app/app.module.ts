import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BreedListComponent } from './breed-list/breed-list.component';
import { RandomDogComponent } from './random-dog/random-dog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BreedListComponent,
    RandomDogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'breeds', component: BreedListComponent },
      { path: 'random', component: RandomDogComponent },
      { path: '**', redirectTo: 'random' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
