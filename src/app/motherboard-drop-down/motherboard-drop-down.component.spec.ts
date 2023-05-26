import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardDropDownComponent } from './motherboard-drop-down.component';

describe('MotherboardDropDownComponent', () => {
  let component: MotherboardDropDownComponent;
  let fixture: ComponentFixture<MotherboardDropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotherboardDropDownComponent]
    });
    fixture = TestBed.createComponent(MotherboardDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
