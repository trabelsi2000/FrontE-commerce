import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandecltComponent } from './commandeclt.component';

describe('CommandecltComponent', () => {
  let component: CommandecltComponent;
  let fixture: ComponentFixture<CommandecltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandecltComponent]
    });
    fixture = TestBed.createComponent(CommandecltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
