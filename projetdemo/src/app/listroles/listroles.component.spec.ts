import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrolesComponent } from './listroles.component';

describe('ListrolesComponent', () => {
  let component: ListrolesComponent;
  let fixture: ComponentFixture<ListrolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListrolesComponent]
    });
    fixture = TestBed.createComponent(ListrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
