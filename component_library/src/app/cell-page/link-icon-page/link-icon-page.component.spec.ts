import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIconPageComponent } from './link-icon-page.component';

describe('LinkIconPageComponent', () => {
  let component: LinkIconPageComponent;
  let fixture: ComponentFixture<LinkIconPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkIconPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkIconPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
