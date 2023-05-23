import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDropdownPageComponent } from './button-dropdown-page.component';

describe('ButtonDropdownPageComponent', () => {
  let component: ButtonDropdownPageComponent;
  let fixture: ComponentFixture<ButtonDropdownPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDropdownPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDropdownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
