import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGalleryComponent } from './manage-gallery.component';

describe('ManageGalleryComponent', () => {
  let component: ManageGalleryComponent;
  let fixture: ComponentFixture<ManageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
