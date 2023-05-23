import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSubmitPageComponent } from './button-submit-page.component';

describe('ButtonSubmitPageComponent', () => {
  let component: ButtonSubmitPageComponent;
  let fixture: ComponentFixture<ButtonSubmitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSubmitPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSubmitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
