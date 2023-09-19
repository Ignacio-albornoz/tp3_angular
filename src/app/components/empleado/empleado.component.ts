import { Component, Input, OnInit, ViewChild, OnChanges} from '@angular/core';

import {MatAccordion} from '@angular/material/expansion';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';
import { JornadaService } from 'src/app/services/jornada/jornada.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit, OnChanges{

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  
  @Input() empleadoId: number = 99;

  empleado!: EmpleadoModel;
  jornadas!: JornadaResponseModel[];
  loadingEmpleado: boolean = true;
  loadingJornada: boolean = true;


  constructor( 
    
    private empleadoService: EmpleadoService,
    private jornadaService: JornadaService,
    private errorMessageService: ErrorMessageService,

  ){}
  
  ngOnChanges() {
    this.getEmpleadoId
  }

  ngOnInit(): void {

    this.getEmpleadoId();
  } 

  getEmpleadoId(){
    this.empleadoService.getEmpleadoById(this.empleadoId)
    .subscribe({
      next:(responseDTO: ResponseDTO) => {

        if(responseDTO.isSuccess){
          this.empleado = responseDTO.response as EmpleadoModel;
          this.loadingEmpleado = false;
          this.getJornadaByEmpleadoNroDocumento()
        }
        else {
          console.log(responseDTO);
          
          responseDTO.message.map(message => message ? this.errorMessageService.ErrorMessage(message) : null )
        }
      },

      error:(e) => {
        console.log(e);

        this.errorMessageService.ErrorMessage(e.error.message)
      }
    })
  }

  getJornadaByEmpleadoNroDocumento(){

    if(!this.empleado.nroDocumento){
      return;
    }

    this.jornadaService.getJornadaByNrDocumento(this.empleado.nroDocumento).subscribe({
      next:(responseDTO: ResponseDTO) => {

        if(responseDTO.isSuccess){

          console.log(responseDTO.response);
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

}


