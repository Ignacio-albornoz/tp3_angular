import { Component, Input } from '@angular/core';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { DialogosService } from 'src/app/services/dialogos/dialogos.service';



@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  //Se reciben los empleados del padre
  @Input() listEmpleados: EmpleadoModel[] = [];

  loading: boolean =  true;
  idEmpleado: number = 0;
  nroDocumento: number = 0;
  nombreColumnas: string[] = ['id', 'nroDocumento', 'nombre', 'email', 'fechaNacimiento', 'fechaIngreso', 'fechaCreacion', 'action' ];

  constructor( private dialogoService: DialogosService){}

  borrarEmpleadoDeLista() {
    this.dialogoService.openDialog(this.idEmpleado, this.nroDocumento)
  }

  caputarId(id: number, nroDocumento: number){
    this.idEmpleado = id
    this.nroDocumento = nroDocumento
  }

}
  





