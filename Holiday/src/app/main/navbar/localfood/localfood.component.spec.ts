import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalfoodComponent } from './localfood.component';

describe('LocalfoodComponent', () => {
  let component: LocalfoodComponent;
  let fixture: ComponentFixture<LocalfoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalfoodComponent]
    });
    fixture = TestBed.createComponent(LocalfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
