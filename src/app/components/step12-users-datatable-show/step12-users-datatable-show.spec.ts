import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step12UsersDatatableShow } from './step12-users-datatable-show';

describe('Step12UsersDatatableShow', () => {
  let component: Step12UsersDatatableShow;
  let fixture: ComponentFixture<Step12UsersDatatableShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step12UsersDatatableShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step12UsersDatatableShow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
