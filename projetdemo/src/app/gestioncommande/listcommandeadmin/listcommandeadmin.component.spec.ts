import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommandeadminComponent } from './listcommandeadmin.component';

describe('ListcommandeadminComponent', () => {
  let component: ListcommandeadminComponent;
  let fixture: ComponentFixture<ListcommandeadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcommandeadminComponent]
    });
    fixture = TestBed.createComponent(ListcommandeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
