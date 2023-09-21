import { Component, OnInit, Input} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
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

  //Recibe el empleado seleccionado o inicializa vacio
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

  empleadoForm!: FormGroup

  //Validador DataPicker
  maxDate: Date;
  menorDeDeEdadDate: Date;


  constructor(

    private formBuilder: FormBuilder,
    private empleadoService: EmpleadoService,
    private errorMessageService: ErrorMessageService){

    //Valida edad
    const fechaActual = Date.now();
    const TIMPESTAMP_18_YEAR = 568000253700;
    //Se le resta 18 anios a la fecha actual
    this.menorDeDeEdadDate = new Date(fechaActual - TIMPESTAMP_18_YEAR);

    this.maxDate = new Date(fechaActual);
  }



  ngOnInit(): void {


    //Inicializa el formulario con sus validaciones
    this.empleadoForm = this.formBuilder.group({
      nroDocumento: ['', [Validators.required, Validators.min(900000)], [this.nroDocumentoExistsValidator.bind(this)]], 
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]], 
      apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email], [this.emailExistsValidator.bind(this)]], 
      fechaNacimiento: ['', [Validators.required]], 
      fechaIngreso: ['', [Validators.required]]
    });
  }

  /**Llamados API */

  //Captura el empleado submit y crea un empleado
  onSubmit() {
    this.empleadoCreateDto = this.empleadoForm.value;
    this.empleadoService.createEmpleado(this.empleadoCreateDto)
    .subscribe({
      next:(responseDTO: ResponseDTO) => {

        if(responseDTO.isSuccess){
          this.errorMessageService.ErrorMessage('Empleado creado!')
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
  
  //Valida con el input si el documento ya existe
  nroDocumentoExistsValidator(control: AbstractControl): Observable<ValidationErrors | null> {

    return this.empleadoService
     .existsByNroDocumento(control.value)
     .pipe( map(exists => exists.response ? { nroDocumentoExists: true} : null) ); 
  }
  
  //Valida con el input si el email ya existe
  emailExistsValidator(control: AbstractControl): Observable<ValidationErrors | null> {

    return this.empleadoService
     .existsByEmail(control.value)
     .pipe( 

        map(exists => exists.response ? { emailExists: true } : null ) 

      ); 
  }

}
