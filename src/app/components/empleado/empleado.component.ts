import { Component, Input, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { EmpleadoModel } from 'src/app/models/empleado.model';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  listEmpleados: EmpleadoModel[] = [];
  
  @Input() empleado: EmpleadoModel = {
  id: 0,
  nroDocumento: 0,
  nombre: '',
  apellido: '',
  email: '',
  fechaNacimiento: new Date(),
  fechaIngreso: new Date(),
  fechaCreacion: new Date(),
  }

}


