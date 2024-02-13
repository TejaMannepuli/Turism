import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalshoppingComponent } from './normalshopping.component';

describe('NormalshoppingComponent', () => {
  let component: NormalshoppingComponent;
  let fixture: ComponentFixture<NormalshoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalshoppingComponent]
    });
    fixture = TestBed.createComponent(NormalshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
