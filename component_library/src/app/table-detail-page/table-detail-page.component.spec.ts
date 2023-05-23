import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDetailPageComponent } from './table-detail-page.component';

describe('TableDetailPageComponent', () => {
  let component: TableDetailPageComponent;
  let fixture: ComponentFixture<TableDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
