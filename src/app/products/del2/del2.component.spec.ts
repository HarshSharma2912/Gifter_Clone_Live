import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Del2Component } from './del2.component';

describe('Del2Component', () => {
  let component: Del2Component;
  let fixture: ComponentFixture<Del2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Del2Component]
    });
    fixture = TestBed.createComponent(Del2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
