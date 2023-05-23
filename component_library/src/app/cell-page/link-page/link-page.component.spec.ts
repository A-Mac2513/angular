import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPageComponent } from './link-page.component';

describe('LinkPageComponent', () => {
  let component: LinkPageComponent;
  let fixture: ComponentFixture<LinkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
