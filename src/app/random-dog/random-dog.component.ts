import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../dog-api.service';

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.css']
})
export class RandomDogComponent implements OnInit {

  public imageUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif';

  constructor(private _service: DogApiService) {
  }

  ngOnInit() {
    this.randomise();    
  }

  public randomise() {
    this._service.getRandomImage()
      .subscribe(imageUrl => {
        this.imageUrl = imageUrl;
      });
  }
}
