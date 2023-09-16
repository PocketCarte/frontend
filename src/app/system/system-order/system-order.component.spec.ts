import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemOrderComponent } from './system-order.component';

describe('SystemOrderComponent', () => {
  let component: SystemOrderComponent;
  let fixture: ComponentFixture<SystemOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemOrderComponent]
    });
    fixture = TestBed.createComponent(SystemOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
