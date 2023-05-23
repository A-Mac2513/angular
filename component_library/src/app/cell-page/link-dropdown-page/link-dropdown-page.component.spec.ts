import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDropdownPageComponent } from './link-dropdown-page.component';

describe('LinkDropdownPageComponent', () => {
  let component: LinkDropdownPageComponent;
  let fixture: ComponentFixture<LinkDropdownPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkDropdownPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkDropdownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
