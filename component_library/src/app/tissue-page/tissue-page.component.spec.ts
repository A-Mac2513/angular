import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissuePageComponent } from './tissue-page.component';

describe('TissuePageComponent', () => {
  let component: TissuePageComponent;
  let fixture: ComponentFixture<TissuePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissuePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TissuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
