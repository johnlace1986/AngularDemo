import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCatComponent } from './random-cat.component';

describe('RandomCatComponent', () => {
  let component: RandomCatComponent;
  let fixture: ComponentFixture<RandomCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
