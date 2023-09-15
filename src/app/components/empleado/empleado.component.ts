import { Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  nombreColumnas: string[] = ['Nombre', 'Apellido', 'Email', 'DNI', 'Fecha Nacimiento', 'Fecha Ingreso', 'Fecha Creacion'];
}
