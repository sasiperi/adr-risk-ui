import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrDataInComponent } from './adr-data-in.component';

describe('AdrDataInComponent', () => {
  let component: AdrDataInComponent;
  let fixture: ComponentFixture<AdrDataInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdrDataInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdrDataInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
