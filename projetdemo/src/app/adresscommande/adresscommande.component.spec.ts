import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresscommandeComponent } from './adresscommande.component';

describe('AdresscommandeComponent', () => {
  let component: AdresscommandeComponent;
  let fixture: ComponentFixture<AdresscommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdresscommandeComponent]
    });
    fixture = TestBed.createComponent(AdresscommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
