import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';
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
  listJornadas: JornadaResponseModel[] = [];
  loading: boolean =  true;

  constructor( private empleadoService: EmpleadoService,
    private errorMessageService: ErrorMessageService,
    private jornadaService: JornadaService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.getAllEmpleados()
    this.getAllJornadas()
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

  getAllJornadas(){
    this.jornadaService.getAllJornadas().subscribe({
      next:(responseDTO: ResponseDTO) => {

        if(responseDTO.isSuccess){

          this.listJornadas = responseDTO.response as JornadaResponseModel[];
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
    this.loading = false;
  }

  navigationEmpleado(){
    this.router.navigate(['/empleado/'])
  }

  navigationJornada(){
    this.router.navigate(['/jornada/'])
  }
}
