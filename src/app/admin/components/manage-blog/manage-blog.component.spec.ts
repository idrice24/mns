import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBlogComponent } from './manage-blog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ManageBlogComponent', () => {
  let component: ManageBlogComponent;
  let fixture: ComponentFixture<ManageBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBlogComponent ],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
