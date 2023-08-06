import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramdetailsComponent } from './programdetails.component';

describe('ProgramdetailsComponent', () => {
  let component: ProgramdetailsComponent;
  let fixture: ComponentFixture<ProgramdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
