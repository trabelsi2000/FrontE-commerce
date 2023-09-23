import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirlivraisoncltComponent } from './voirlivraisonclt.component';

describe('VoirlivraisoncltComponent', () => {
  let component: VoirlivraisoncltComponent;
  let fixture: ComponentFixture<VoirlivraisoncltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoirlivraisoncltComponent]
    });
    fixture = TestBed.createComponent(VoirlivraisoncltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
