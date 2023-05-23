import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsPageComponent } from './inputs-page.component';

describe('InputsPageComponent', () => {
  let component: InputsPageComponent;
  let fixture: ComponentFixture<InputsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
