import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLinkPageComponent } from './icon-link-page.component';

describe('IconLinkPageComponent', () => {
  let component: IconLinkPageComponent;
  let fixture: ComponentFixture<IconLinkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLinkPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconLinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
