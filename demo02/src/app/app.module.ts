import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    DogsModule,
    CatsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'dogs', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
