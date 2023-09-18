import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JornadaRequestModel } from 'src/app/models/jornada-request.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';
import { JornadaService } from 'src/app/services/jornada/jornada.service';


@Component({
  selector: 'app-jornada-form',
  templateUrl: './jornada-form.component.html',
  styleUrls: ['./jornada-form.component.css']
})
export class JornadaFormComponent {

  jornadaRequest!: JornadaRequestModel;

  //ConceptoId selector
  conceptoIdSelected = 1;


  //Validador DataPicker
  maxDate: Date;

  constructor(private formBuilder: FormBuilder, private jornadaService: JornadaService, private errorMessageService: ErrorMessageService){

    const fechaActual = Date.now();

    this.maxDate = new Date(fechaActual);

  }

  jornadaForm!: FormGroup

  ngOnInit(): void {
    this.jornadaForm = this.formBuilder.group({
      idEmpleado: ['', [Validators.required, Validators.min(1)]], 
      fecha: ['', [Validators.required]],
      hsTrabajadas:  ['', [Validators.required,]],
    });
  }

  onSubmit() {
    this.jornadaRequest = this.jornadaForm.value;
    console.log(this.jornadaRequest);
    this.jornadaRequest.idConcepto = this.conceptoIdSelected;
    console.log(this.jornadaRequest);
    
    this.jornadaService.createJornada(this.jornadaRequest)
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
