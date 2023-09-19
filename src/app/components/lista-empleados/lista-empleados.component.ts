import { Component, OnInit } from '@angular/core';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { DialogosService } from 'src/app/services/dialogos/dialogos.service';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit{

  listEmpleados: EmpleadoModel[] = [];
  nombreColumnas: string[] = ['id', 'nroDocumento', 'nombre', 'email', 'fechaNacimiento', 'fechaIngreso', 'fechaCreacion', 'action' ];
  loading: boolean =  true;
  index: number = 0;


  constructor( private empleadoService: EmpleadoService,
    private errorMessageService: ErrorMessageService,
  ){}

  ngOnInit(): void {
    this.getAllEmpleados()
  }

  getAllEmpleados(){
    this.empleadoService.getAllEmpleados().subscribe({
      next:(responseDTO: ResponseDTO) => {

      if(responseDTO.isSuccess){
        this.listEmpleados = responseDTO.response as EmpleadoModel[];
        this.loading = false;

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

  borrarEmpleadoDeLista(id: number) {
    this.listEmpleados = this.listEmpleados.filter(empleado => empleado.id !== id);
    console.log(this.listEmpleados);
    
  }

  
}


