import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVideoComponent } from './manage-video.component';

describe('ManageVideoComponent', () => {
  let component: ManageVideoComponent;
  let fixture: ComponentFixture<ManageVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
