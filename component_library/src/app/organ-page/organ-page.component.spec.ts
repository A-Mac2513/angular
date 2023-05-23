import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganPageComponent } from './organ-page.component';

describe('OrganPageComponent', () => {
  let component: OrganPageComponent;
  let fixture: ComponentFixture<OrganPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
