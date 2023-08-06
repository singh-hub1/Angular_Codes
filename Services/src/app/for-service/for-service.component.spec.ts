import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForServiceComponent } from './for-service.component';

describe('ForServiceComponent', () => {
  let component: ForServiceComponent;
  let fixture: ComponentFixture<ForServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
