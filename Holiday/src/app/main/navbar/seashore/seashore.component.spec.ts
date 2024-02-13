import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeashoreComponent } from './seashore.component';

describe('SeashoreComponent', () => {
  let component: SeashoreComponent;
  let fixture: ComponentFixture<SeashoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeashoreComponent]
    });
    fixture = TestBed.createComponent(SeashoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
