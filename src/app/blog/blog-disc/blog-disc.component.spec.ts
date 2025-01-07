import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDiscComponent } from './blog-disc.component';

describe('BlogDiscComponent', () => {
  let component: BlogDiscComponent;
  let fixture: ComponentFixture<BlogDiscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDiscComponent]
    });
    fixture = TestBed.createComponent(BlogDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
