import { Component, OnInit } from '@angular/core';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';
import { JornadaService } from 'src/app/services/jornada/jornada.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  listEmpleados: EmpleadoModel[] = [];
  loading: boolean =  true;

  constructor( private empleadoService: EmpleadoService,
    private errorMessageService: ErrorMessageService,
    private jornadaService: JornadaService
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
    this.loading = true;
    this.listEmpleados = this.listEmpleados.filter(empleado => empleado.id !== id);
    console.log(this.listEmpleados);
    this.loading = false;
  }
}
