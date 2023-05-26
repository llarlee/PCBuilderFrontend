import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamDropDownComponent } from './ram-drop-down.component';

describe('RamDropDownComponent', () => {
  let component: RamDropDownComponent;
  let fixture: ComponentFixture<RamDropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RamDropDownComponent]
    });
    fixture = TestBed.createComponent(RamDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
