import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenouvlistComponent } from './homenouvlist.component';

describe('HomenouvlistComponent', () => {
  let component: HomenouvlistComponent;
  let fixture: ComponentFixture<HomenouvlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomenouvlistComponent]
    });
    fixture = TestBed.createComponent(HomenouvlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
