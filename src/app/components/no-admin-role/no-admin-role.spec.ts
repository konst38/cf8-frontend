import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAdminRole } from './no-admin-role';

describe('NoAdminRole', () => {
  let component: NoAdminRole;
  let fixture: ComponentFixture<NoAdminRole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoAdminRole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoAdminRole);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
