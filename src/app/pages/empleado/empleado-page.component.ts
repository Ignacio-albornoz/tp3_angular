import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';

@Component({
  selector: 'app-empleado-page',
  templateUrl: './empleado-page.component.html',
  styleUrls: ['./empleado-page.component.css']
})
export class EmpleadoPageComponent implements OnInit{

  empleadoId: number = 0;
  empleado!: EmpleadoModel;
  loadingEmpleado: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private errorMessageService: ErrorMessageService,

    ){

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>{
      let idNumber = params.get('id')
      idNumber ? this.empleadoId = parseInt(idNumber) : null
      console.log(this.empleadoId);
    })
    this.getEmpleadoId();

  }

  ngOnChanges() {
    this.getEmpleadoId
  }


  getEmpleadoId(){
    this.empleadoService.getEmpleadoById(this.empleadoId)
    .subscribe({
      next:(responseDTO: ResponseDTO) => {

        if(responseDTO.isSuccess){
          this.empleado = responseDTO.response as EmpleadoModel;
          this.loadingEmpleado = false;
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
}
