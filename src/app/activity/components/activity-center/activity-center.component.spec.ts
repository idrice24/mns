import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCenterComponent } from './activity-center.component';

describe('ActivityCenterComponent', () => {
  let component: ActivityCenterComponent;
  let fixture: ComponentFixture<ActivityCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
