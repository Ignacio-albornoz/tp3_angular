import { Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { JornadaService } from 'src/app/services/jornada/jornada.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  
  @Input() empleadoId: Number = 99;

  empleado!: EmpleadoModel;
  jornadas!: JornadaResponseModel[];
  loadingEmpleado: boolean = true;
  loadingJornada: boolean = true;


  constructor( private empleadoService: EmpleadoService, private jornadaService: JornadaService){}

  ngOnInit(): void {

    //No disponible sin routing?
    /* if (this.empleadoId == 0){
      this.route.params.subscribe(
        params => {
        this.empleadoId = params['id']; // Obtenemos el valor del parametro id
        console.log(this.empleadoId);
      });
    } */

    this.getEmpleadoId();
  } 

  getEmpleadoId(){
    this.empleadoService.getEmpleadoById(this.empleadoId).subscribe({
      next:(result: any) => {

        if(result as EmpleadoModel){
          console.log(result);
          this.empleado = result;
          this.loadingEmpleado = false;
          this.getJornadaByEmpleadoNroDocumento()
        } 
      },

      error:(e) => {
        console.log(e);
      }
    })
  }

  getJornadaByEmpleadoNroDocumento(){

    if(!this.empleado.nroDocumento){
      return;
    }

    this.jornadaService.getJornadaByEmpleadoNrDocumento(this.empleado.nroDocumento).subscribe({
      next:(result: any) => {

        if(result as JornadaResponseModel){
          console.log(result);
          this.jornadas = result;
          this.loadingJornada = false;
        } 
      },

      error:(e) => {
        console.log(e);
      }
    })
  }
}


