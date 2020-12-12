import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItemComponent } from './shopping-list-item.component';

describe('ShoppingListItemComponent', () => {
  let component: ShoppingListItemComponent;
  let fixture: ComponentFixture<ShoppingListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
