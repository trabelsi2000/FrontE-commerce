import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlivraisonComponent } from './addlivraison.component';

describe('AddlivraisonComponent', () => {
  let component: AddlivraisonComponent;
  let fixture: ComponentFixture<AddlivraisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddlivraisonComponent]
    });
    fixture = TestBed.createComponent(AddlivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
