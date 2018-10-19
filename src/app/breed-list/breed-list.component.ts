import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../dog-api.service';
import { IBreed } from '../breed';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent implements OnInit {

  public breeds: any;
  public selectedBreed: IBreed;
  public selectedSubBreed: string;
  public images: Array<string>;

  constructor(private _service : DogApiService) {
    this._service.getBreeds().subscribe(breeds => {
      this.breeds = breeds;
      this.selectedBreed = breeds[0];
      this.breedChanged();
    });
  }

  ngOnInit() {
  }

  public breedChanged() {
    this.selectedSubBreed = "";
    this.subBreedChanged();
  }

  public subBreedChanged() {
    let breedName = this.selectedBreed.name;

    if (this.selectedSubBreed && this.selectedSubBreed.length > 0) {
      breedName += '-' + this.selectedSubBreed;
    }

    this._service.getByBreed(breedName).subscribe(images =>{
      this.images = images;
    });
  }

}
