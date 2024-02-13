import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainviewComponent } from './mountainview.component';

describe('MountainviewComponent', () => {
  let component: MountainviewComponent;
  let fixture: ComponentFixture<MountainviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MountainviewComponent]
    });
    fixture = TestBed.createComponent(MountainviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
