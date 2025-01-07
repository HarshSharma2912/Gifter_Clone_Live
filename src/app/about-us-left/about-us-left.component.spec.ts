import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsLeftComponent } from './about-us-left.component';

describe('AboutUsLeftComponent', () => {
  let component: AboutUsLeftComponent;
  let fixture: ComponentFixture<AboutUsLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsLeftComponent]
    });
    fixture = TestBed.createComponent(AboutUsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
