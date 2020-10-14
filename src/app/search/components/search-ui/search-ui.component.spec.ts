import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUiComponent } from './search-ui.component';

describe('SearchUiComponent', () => {
  let component: SearchUiComponent;
  let fixture: ComponentFixture<SearchUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
