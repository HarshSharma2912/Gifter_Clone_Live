import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Del4Component } from './del4.component';

describe('Del4Component', () => {
  let component: Del4Component;
  let fixture: ComponentFixture<Del4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Del4Component]
    });
    fixture = TestBed.createComponent(Del4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
