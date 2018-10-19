import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../dog-api.service';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.css']
})
export class RandomImageComponent implements OnInit {

  public imageUrl: string;

  constructor(private _service: DogApiService) {
    this.randomise();
  }

  ngOnInit() {
    
  }

  public randomise() {
    this._service.getRandomImage().subscribe(image => {
      this.imageUrl = image;
    });
  }

}
