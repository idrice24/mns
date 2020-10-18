import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ManageVideoComponent } from './manage-video.component';

describe('ManageVideoComponent', () => {
  let component: ManageVideoComponent;
  let fixture: ComponentFixture<ManageVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageVideoComponent],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule],
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
