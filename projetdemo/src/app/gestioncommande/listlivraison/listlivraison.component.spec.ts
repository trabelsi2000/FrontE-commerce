import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlivraisonComponent } from './listlivraison.component';

describe('ListlivraisonComponent', () => {
  let component: ListlivraisonComponent;
  let fixture: ComponentFixture<ListlivraisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListlivraisonComponent]
    });
    fixture = TestBed.createComponent(ListlivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
