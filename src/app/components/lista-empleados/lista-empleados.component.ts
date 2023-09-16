import { Component, OnInit } from '@angular/core';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit{

  listEmpleados: EmpleadoModel[] = [];
  nombreColumnas: string[] = ['id', 'nroDocumento', 'nombre', 'email', 'fechaNacimiento', 'fechaIngreso', 'fechaCreacion' ];
  loading: boolean =  true;

  constructor( private empleadoService: EmpleadoService){}

  ngOnInit(): void {
    this.getAllEmpleados()
  }

  getAllEmpleados(){
    this.empleadoService.getAllEmpleados().subscribe({
      next:(result: any) => {
        
        if(result as EmpleadoModel){
          console.log(result);
          this.listEmpleados = result;
          this.loading = false;
        } 
      },

      error:(e) => {
        console.log(e);
      }
    })
  }
}
