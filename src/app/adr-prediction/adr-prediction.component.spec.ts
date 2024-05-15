import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrPredictionComponent } from './adr-prediction.component';

describe('AdrPredictionComponent', () => {
  let component: AdrPredictionComponent;
  let fixture: ComponentFixture<AdrPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdrPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdrPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
