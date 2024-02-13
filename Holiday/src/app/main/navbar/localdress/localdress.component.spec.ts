import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaldressComponent } from './localdress.component';

describe('LocaldressComponent', () => {
  let component: LocaldressComponent;
  let fixture: ComponentFixture<LocaldressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocaldressComponent]
    });
    fixture = TestBed.createComponent(LocaldressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
