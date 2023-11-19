import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRedirectComponent } from './system-redirect.component';

describe('SystemRedirectComponent', () => {
  let component: SystemRedirectComponent;
  let fixture: ComponentFixture<SystemRedirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemRedirectComponent]
    });
    fixture = TestBed.createComponent(SystemRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
