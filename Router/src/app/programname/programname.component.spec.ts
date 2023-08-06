import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramnameComponent } from './programname.component';

describe('ProgramnameComponent', () => {
  let component: ProgramnameComponent;
  let fixture: ComponentFixture<ProgramnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramnameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
