import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuDropDownComponent } from './cpu-drop-down.component';

describe('CpuDropDownComponent', () => {
  let component: CpuDropDownComponent;
  let fixture: ComponentFixture<CpuDropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpuDropDownComponent]
    });
    fixture = TestBed.createComponent(CpuDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
