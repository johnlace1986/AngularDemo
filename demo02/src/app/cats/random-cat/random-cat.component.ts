import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-cat',
  templateUrl: './random-cat.component.html',
  styleUrls: ['./random-cat.component.css']
})
export class RandomCatComponent implements OnInit {

  public imageUrl: string = 'https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg';

  constructor() { }

  ngOnInit() {
  }

  public randomise() {
    console.log('randomise cats!');
  }

}
