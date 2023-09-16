import { Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  listEmpleados: EmpleadoModel[] = [];
  loading: boolean =  true;

  constructor( private empleadoService: EmpleadoService){}

  ngOnInit(): void {
    this.getAllEmpleados()
  }

  getAllEmpleados(){
    this.empleadoService.getAllEmpleados().subscribe({
      next:(result: any) => {
        console.log(result);

        if(result as EmpleadoModel){
          this.listEmpleados = result;
          this.loading = false;
        }
        
      }
    })
  }
}


