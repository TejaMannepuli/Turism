import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlelightComponent } from './candlelight.component';

describe('CandlelightComponent', () => {
  let component: CandlelightComponent;
  let fixture: ComponentFixture<CandlelightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandlelightComponent]
    });
    fixture = TestBed.createComponent(CandlelightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
