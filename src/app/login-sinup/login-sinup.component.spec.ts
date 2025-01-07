import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSinupComponent } from './login-sinup.component';

describe('LoginSinupComponent', () => {
  let component: LoginSinupComponent;
  let fixture: ComponentFixture<LoginSinupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSinupComponent]
    });
    fixture = TestBed.createComponent(LoginSinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
