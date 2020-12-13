import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ShoppingListItemComponent } from './shopping-list-item.component';

describe('ShoppingListItemComponent', () => {
  let component: ShoppingListItemComponent;
  let fixture: ComponentFixture<ShoppingListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingListItemComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule,
        ReactiveFormsModule],
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
