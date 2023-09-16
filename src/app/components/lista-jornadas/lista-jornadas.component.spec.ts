import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJornadasComponent } from './lista-jornadas.component';

describe('ListaJornadasComponent', () => {
  let component: ListaJornadasComponent;
  let fixture: ComponentFixture<ListaJornadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaJornadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaJornadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
