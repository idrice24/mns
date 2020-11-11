import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAbonnementComponent } from './manage-abonnement.component';

describe('ManageAbonnementComponent', () => {
  let component: ManageAbonnementComponent;
  let fixture: ComponentFixture<ManageAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAbonnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
