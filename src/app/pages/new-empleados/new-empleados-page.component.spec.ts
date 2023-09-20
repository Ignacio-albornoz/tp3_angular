import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmpleadosPageComponent } from './new-empleados-page.component';

describe('NewEmpleadosPageComponent', () => {
  let component: NewEmpleadosPageComponent;
  let fixture: ComponentFixture<NewEmpleadosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmpleadosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEmpleadosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
