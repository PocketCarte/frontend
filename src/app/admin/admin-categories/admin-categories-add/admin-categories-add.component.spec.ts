import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriesAddComponent } from './admin-categories-add.component';

describe('AdminCategoriesAddComponent', () => {
  let component: AdminCategoriesAddComponent;
  let fixture: ComponentFixture<AdminCategoriesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCategoriesAddComponent]
    });
    fixture = TestBed.createComponent(AdminCategoriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
