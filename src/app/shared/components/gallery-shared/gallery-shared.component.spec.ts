import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySharedComponent } from './gallery-shared.component';

describe('GallerySharedComponent', () => {
  let component: GallerySharedComponent;
  let fixture: ComponentFixture<GallerySharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerySharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
