import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { CreateAndUpdateEmpleadoDTOModel } from 'src/app/models/empleadoDTO.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';

@Component({
  selector: 'app-empleado-form-update',
  templateUrl: './empleado-form-update.component.html',
  styleUrls: ['./empleado-form-update.component.css']
})
export class EmpleadoFormUpdateComponent {


  empleadoCreateDto!: CreateAndUpdateEmpleadoDTOModel;
  empleadoForm!: FormGroup

  loading: boolean = false

   //Validador DataPicker
   maxDate: Date;
   menorDeDeEdadDate: Date;
   

  /* Inputs & Outputs*/

  @Output() seActualizoEmpleado = new EventEmitter<EmpleadoModel>()

  @Input() update: boolean = false;

  @Input() empleado: EmpleadoModel = {
    id: 0,
    nroDocumento: 0,
    nombre: '',
    apellido: '',
    email: '',
    fechaNacimiento: new Date, 
    fechaIngreso: new Date,
    fechaCreacion: new Date, 
  };


  constructor(

    private formBuilder: FormBuilder,
    private empleadoService: EmpleadoService,
    private errorMessageService: ErrorMessageService,

  ){

    const fechaActual = Date.now();
    const TIMPESTAMP_18_YEAR = 568000253700;
    //Se le resta 18 anios a la fecha actual
    this.menorDeDeEdadDate = new Date(fechaActual - TIMPESTAMP_18_YEAR);

    this.maxDate = new Date(fechaActual);
  }


  ngOnInit(): void {

    this.empleadoForm = this.formBuilder.group({
      nroDocumento: [this.empleado.nroDocumento, [Validators.required, Validators.min(900000)]], 
      nombre: [this.empleado.nombre, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]], 
      apellido: [this.empleado.apellido, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: [this.empleado.email, [Validators.required, Validators.email]], 
      fechaNacimiento: [this.empleado.fechaNacimiento, [Validators.required]], 
      fechaIngreso: [this.empleado.fechaIngreso, [Validators.required]]

    });
  }
  

  onSubmit() {
    this.empleadoCreateDto = this.empleadoForm.value;

    this.empleadoService.updateEmpleado(this.empleadoCreateDto, this.empleado.id)
    .subscribe({
      next:(responseDTO: ResponseDTO) => {
        
        
        if(responseDTO.isSuccess){
          
          this.errorMessageService.ErrorMessage('Update')

          this.seActualizoEmpleado.emit(responseDTO.response as EmpleadoModel);

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
