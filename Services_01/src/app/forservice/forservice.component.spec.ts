import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForserviceComponent } from './forservice.component';

describe('ForserviceComponent', () => {
  let component: ForserviceComponent;
  let fixture: ComponentFixture<ForserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
