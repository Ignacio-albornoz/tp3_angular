import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';

@Component({
  selector: 'app-empleado-page',
  templateUrl: './empleado-page.component.html',
  styleUrls: ['./empleado-page.component.css']
})
export class EmpleadoPageComponent implements OnInit{

  mostrarUpdateForm: boolean = false;

  empleadoId: number = 0;
  empleado!: EmpleadoModel;
  loadingEmpleado: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private errorMessageService: ErrorMessageService,
    private router: Router

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

  /**Llamados API */

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
          
          this.navigationHome()
          responseDTO.message.map(message => message ? this.errorMessageService.ErrorMessage(message) : null )
        }
      },

      error:(e) => {
        console.log(e);
        this.navigationHome()
        this.errorMessageService.ErrorMessage(e.error.message)
      }
    })
  }

  /* Outputs Handles */

  handleOnChageEmpleado(event: EmpleadoModel){
    this.loadingEmpleado = true;
    this.empleado = event
    this.loadingEmpleado = false;
  }

  handleUpdateButton(){
    console.log(this.mostrarUpdateForm);
    
    this.mostrarUpdateForm = !this.mostrarUpdateForm;
  }

  /**Otras funciones */

  //Redirige a home, se usa en getEmpleadoId. en el caso de no econtrarse el empleado
  navigationHome(){
    this.router.navigate(['/empleado'])
  }
}
