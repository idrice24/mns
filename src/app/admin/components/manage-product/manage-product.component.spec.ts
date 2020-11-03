import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductComponent } from './manage-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from 'src/app/shared/services/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';


describe('ManageProductComponent', () => {
  let component: ManageProductComponent;
  let fixture: ComponentFixture<ManageProductComponent>;
  let productService: ProductService;
  let messageService: MessageService;
  let confirmationService: ConfirmationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageProductComponent],
      imports: [HttpClientTestingModule,
        FormsModule,
        RouterTestingModule],
      providers: [MessageService, ConfirmationService

      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    productService = TestBed.inject(ProductService);
    messageService = TestBed.inject(MessageService);
    confirmationService = TestBed.inject(ConfirmationService);

    fixture = TestBed.createComponent(ManageProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
