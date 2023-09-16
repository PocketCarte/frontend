import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMenuComponent } from './system-menu.component';

describe('SystemMenuComponent', () => {
  let component: SystemMenuComponent;
  let fixture: ComponentFixture<SystemMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemMenuComponent]
    });
    fixture = TestBed.createComponent(SystemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
