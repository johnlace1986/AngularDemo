import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.css']
})
export class RandomImageComponent implements OnInit {

  @Input()
  public imageUrl: string = '';

  @Output()
  public OnRandomiseClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public randomise() {
    this.OnRandomiseClicked.emit();
  }

}
