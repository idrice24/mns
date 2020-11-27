import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLandingViewComponent } from './product-landing-view.component';

describe('ProductLandingViewComponent', () => {
  let component: ProductLandingViewComponent;
  let fixture: ComponentFixture<ProductLandingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLandingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLandingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
