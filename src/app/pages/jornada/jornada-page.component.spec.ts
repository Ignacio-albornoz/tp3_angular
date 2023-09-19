import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaPageComponent } from './jornada-page.component';

describe('JornadaPageComponent', () => {
  let component: JornadaPageComponent;
  let fixture: ComponentFixture<JornadaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JornadaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JornadaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
