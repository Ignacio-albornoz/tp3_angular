import { Component, Input, OnInit } from '@angular/core';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { DialogosService } from 'src/app/services/dialogos/dialogos.service';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';
import { JornadaService } from 'src/app/services/jornada/jornada.service';


@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  @Input() listEmpleados: EmpleadoModel[] = [];
  loading: boolean =  true;
  idEmpleado: number = 0;
  nroDocumento: number = 0;
  nombreColumnas: string[] = ['id', 'nroDocumento', 'nombre', 'email', 'fechaNacimiento', 'fechaIngreso', 'fechaCreacion', 'action' ];

  constructor( private dialogoService: DialogosService, private errorMessageService: ErrorMessageService){}

  borrarEmpleadoDeLista() {

    this.dialogoService.openDialog(this.idEmpleado, this.nroDocumento)
  }

  caputarId(id: number, nroDocumento: number){
    this.idEmpleado = id
    this.nroDocumento = nroDocumento
  }




    
    /* 
    this.listEmpleados = this.listEmpleados.filter(empleado => empleado.id !== id);
    console.log(this.listEmpleados);
     */
  }
  





