import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDashboardComponent } from './media-dashboard.component';

describe('MediaDashboardComponent', () => {
  let component: MediaDashboardComponent;
  let fixture: ComponentFixture<MediaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
