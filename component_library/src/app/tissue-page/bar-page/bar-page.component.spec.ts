import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarPageComponent } from './bar-page.component';

describe('BarPageComponent', () => {
  let component: BarPageComponent;
  let fixture: ComponentFixture<BarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
