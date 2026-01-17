import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step12UsersDatatable } from './step12-users-datatable';

describe('Step12UsersDatatable', () => {
  let component: Step12UsersDatatable;
  let fixture: ComponentFixture<Step12UsersDatatable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step12UsersDatatable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step12UsersDatatable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
