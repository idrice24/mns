import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnsNavbarComponent } from './mns-navbar.component';

describe('MnsNavbarComponent', () => {
  let component: MnsNavbarComponent;
  let fixture: ComponentFixture<MnsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
