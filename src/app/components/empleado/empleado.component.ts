import { Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import {MatAccordion} from '@angular/material/expansion';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { DialogosService } from 'src/app/services/dialogos/dialogos.service';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';
import { JornadaService } from 'src/app/services/jornada/jornada.service';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  
  jornadas!: JornadaResponseModel[];
  loadingJornada: boolean = true;
  contieneJornadas: boolean = true;

  @Output() onClickUpdate = new EventEmitter<void>()
  
  @Input() empleado: EmpleadoModel = {
    id: 0,
    nroDocumento: 0,
    nombre: '',
    apellido: '',
    email: '',
    fechaNacimiento: new Date, 
    fechaIngreso: new Date,
    fechaCreacion: new Date, 
  };

  constructor( 
    private jornadaService:JornadaService,
    private errorMessageService:ErrorMessageService,
    private dialogoService: DialogosService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getJornadaByEmpleadoNroDocumento()
  }
  
  onClickUpdateButton(){
    this.onClickUpdate.emit()
  }
  
  getJornadaByEmpleadoNroDocumento(){

    if(this.empleado.nroDocumento == 0){
      return;
    }

    this.jornadaService.getJornadaByNrDocumento(this.empleado.nroDocumento).subscribe({
      next:(responseDTO: ResponseDTO) => {

        if(responseDTO.isSuccess){
          
          this.jornadas = responseDTO.response as JornadaResponseModel[];
          this.loadingJornada = false;

        } 
        else {
          responseDTO.message.map(message => message ? this.errorMessageService.ErrorMessage(message) : null )
          
        }
        
      },

      error:(e) => {
        this.errorMessageService.ErrorMessage(e.error.message)
      }
    })
  }

  borrarEmpleado(){
    this.dialogoService.openDialog(this.empleado.id, this.empleado.nroDocumento);
  }

  navigationJornada(){
    this.router.navigate(['/jornada/' + this.empleado.id])
  }



}


