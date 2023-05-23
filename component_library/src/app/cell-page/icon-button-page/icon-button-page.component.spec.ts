import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonPageComponent } from './icon-button-page.component';

describe('IconButtonPageComponent', () => {
  let component: IconButtonPageComponent;
  let fixture: ComponentFixture<IconButtonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconButtonPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
