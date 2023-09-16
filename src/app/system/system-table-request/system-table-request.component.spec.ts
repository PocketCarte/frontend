import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTableRequestComponent } from './system-table-request.component';

describe('SystemTableRequestComponent', () => {
  let component: SystemTableRequestComponent;
  let fixture: ComponentFixture<SystemTableRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemTableRequestComponent]
    });
    fixture = TestBed.createComponent(SystemTableRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
