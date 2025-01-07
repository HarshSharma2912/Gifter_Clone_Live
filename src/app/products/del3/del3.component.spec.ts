import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Del3Component } from './del3.component';

describe('Del3Component', () => {
  let component: Del3Component;
  let fixture: ComponentFixture<Del3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Del3Component]
    });
    fixture = TestBed.createComponent(Del3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
