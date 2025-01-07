import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonchildComponent } from './commonchild.component';

describe('CommonchildComponent', () => {
  let component: CommonchildComponent;
  let fixture: ComponentFixture<CommonchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonchildComponent]
    });
    fixture = TestBed.createComponent(CommonchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
