import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalfoodComponent } from './normalfood.component';

describe('NormalfoodComponent', () => {
  let component: NormalfoodComponent;
  let fixture: ComponentFixture<NormalfoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalfoodComponent]
    });
    fixture = TestBed.createComponent(NormalfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
