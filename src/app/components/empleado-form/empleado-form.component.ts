import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { CreateAndUpdateEmpleadoDTOModel } from 'src/app/models/empleadoDTO.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';




@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit{

  empleadoCreateDto!: CreateAndUpdateEmpleadoDTOModel;

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

  //Validador DataPicker
  maxDate: Date;
  menorDeDeEdadDate: Date;


  constructor(private formBuilder: FormBuilder, private empleadoService: EmpleadoService, private errorMessageService: ErrorMessageService){

    const fechaActual = Date.now();
    const TIMPESTAMP_18_YEAR = 568000253700;
    //Se le resta 18 anios a la fecha actual
    this.menorDeDeEdadDate = new Date(fechaActual - TIMPESTAMP_18_YEAR);

    this.maxDate = new Date(fechaActual);
  }

  empleadoForm!: FormGroup

  ngOnInit(): void {
    this.empleadoForm = this.formBuilder.group({
      nroDocumento: ['', [Validators.required, Validators.min(1000000)]], 
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]], 
      apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]], 
      fechaNacimiento: ['', [Validators.required]], 
      fechaIngreso: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.empleadoCreateDto = this.empleadoForm.value;
    console.log(this.empleadoCreateDto);
    this.empleadoService.createEmpleado(this.empleadoCreateDto)
    .subscribe({
      next:(responseDTO: ResponseDTO) => {

        if(responseDTO.isSuccess){
          
          console.log('Creado');
          console.log(responseDTO.response);
          
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
