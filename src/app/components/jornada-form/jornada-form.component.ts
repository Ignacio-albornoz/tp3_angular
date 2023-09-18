import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JornadaRequestModel } from 'src/app/models/jornada-request.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { JornadaService } from 'src/app/services/jornada/jornada.service';

import {MatSnackBar} from '@angular/material/snack-bar';



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

  constructor(private formBuilder: FormBuilder, private jornadaService: JornadaService, private _snackBar: MatSnackBar){

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

  ErrorMessage(message: string, action: string) {
    this._snackBar.open(message, action);
    
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
          console.error(responseDTO.message)
          responseDTO.message.map( message => this.ErrorMessage(message, 'OK'))
        }
        
      },

      error:(error) => {
        console.log(error.error.message);
        this.ErrorMessage(error.error.message, 'OK')
      }
    })
  }

  

}
