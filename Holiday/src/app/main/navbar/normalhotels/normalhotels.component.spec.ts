import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalhotelsComponent } from './normalhotels.component';

describe('NormalhotelsComponent', () => {
  let component: NormalhotelsComponent;
  let fixture: ComponentFixture<NormalhotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalhotelsComponent]
    });
    fixture = TestBed.createComponent(NormalhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
