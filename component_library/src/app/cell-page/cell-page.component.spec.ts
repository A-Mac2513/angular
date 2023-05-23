import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellPageComponent } from './cell-page.component';

describe('CellPageComponent', () => {
  let component: CellPageComponent;
  let fixture: ComponentFixture<CellPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
