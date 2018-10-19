import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BreedListComponent } from './breed-list/breed-list.component';
import { RandomImageComponent } from './random-image/random-image.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BreedListComponent,
    RandomImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'breeds', component: BreedListComponent },
      { path: 'random', component: RandomImageComponent },
      { path: '**', redirectTo: 'breeds' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
