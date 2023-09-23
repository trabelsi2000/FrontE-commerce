import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadressComponent } from './addadress.component';

describe('AddadressComponent', () => {
  let component: AddadressComponent;
  let fixture: ComponentFixture<AddadressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddadressComponent]
    });
    fixture = TestBed.createComponent(AddadressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
