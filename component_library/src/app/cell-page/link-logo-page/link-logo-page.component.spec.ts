import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkLogoPageComponent } from './link-logo-page.component';

describe('LinkLogoPageComponent', () => {
  let component: LinkLogoPageComponent;
  let fixture: ComponentFixture<LinkLogoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkLogoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkLogoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
