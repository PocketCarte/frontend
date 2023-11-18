import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNotFoundComponent } from './system-not-found.component';

describe('SystemNotFoundComponent', () => {
  let component: SystemNotFoundComponent;
  let fixture: ComponentFixture<SystemNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemNotFoundComponent]
    });
    fixture = TestBed.createComponent(SystemNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
