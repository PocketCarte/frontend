import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMenuOrderComponent } from './system-menu-order.component';

describe('SystemMenuOrderComponent', () => {
  let component: SystemMenuOrderComponent;
  let fixture: ComponentFixture<SystemMenuOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemMenuOrderComponent]
    });
    fixture = TestBed.createComponent(SystemMenuOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
