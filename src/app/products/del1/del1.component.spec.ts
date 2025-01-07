import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Del1Component } from './del1.component';

describe('Del1Component', () => {
  let component: Del1Component;
  let fixture: ComponentFixture<Del1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Del1Component]
    });
    fixture = TestBed.createComponent(Del1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
