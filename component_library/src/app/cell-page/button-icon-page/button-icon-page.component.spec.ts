import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconPageComponent } from './button-icon-page.component';

describe('ButtonIconPageComponent', () => {
  let component: ButtonIconPageComponent;
  let fixture: ComponentFixture<ButtonIconPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonIconPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
