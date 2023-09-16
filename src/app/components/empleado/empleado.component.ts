import { Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  
  @Input() empleadoId: Number = 102;

  empleado!: EmpleadoModel;
  loading: boolean = true;


  constructor( private empleadoService: EmpleadoService){}

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
          this.loading = false;
        } 
      },

      error:(e) => {
        console.log(e);
      }
    })
  }
}


