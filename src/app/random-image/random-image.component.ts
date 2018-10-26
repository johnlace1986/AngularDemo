import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../dog-api.service';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.css']
})
export class RandomImageComponent implements OnInit {

  public imageUrl: string;
  public images: Array<string> = new Array<string>();
  public selectedIndex: number = -1;

  constructor(private _service: DogApiService) {
    this.next();
  }

  ngOnInit() {
    
  }

  private showImageAtIndex() {
    this.imageUrl = this.images[this.selectedIndex];
  }

  public next() {
    if (this.selectedIndex === this.images.length -1) {
      this._service.getRandomImage()
        .subscribe(imageUrl => {
          this.images.push(imageUrl);
          this.selectedIndex++;
          this.showImageAtIndex();
        })
    }
    else {
      this.selectedIndex++;
      this.showImageAtIndex();
    }
  }

  public previous() {
    this.selectedIndex--;
    this.showImageAtIndex();
  }

}
