import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
export class JornadaFormComponent implements OnInit{

  @Input() empleadoId: number = 0;

  jornadaRequest!: JornadaRequestModel;

  //ConceptoId selector
  conceptoIdSelected = 1;
  disable: boolean = false;

  hsTrabajadasMax: number = 8;
  hsTrabajadasMin: number = 6;


  //Validador DataPicker
  maxDate: Date;

  constructor(private formBuilder: FormBuilder, private jornadaService: JornadaService, private errorMessageService: ErrorMessageService){

    const fechaActual = Date.now();

    this.maxDate = new Date(fechaActual);

  }

  onConceptoSelected(event: any){
    this.conceptoIdSelected = event.value;

    console.log(this.conceptoIdSelected);

    if(this.conceptoIdSelected === 1){
      this.hsTrabajadasMin = 6;
      this.hsTrabajadasMax = 8;
    }

    if(this.conceptoIdSelected === 2){
      this.hsTrabajadasMin = 2;
      this.hsTrabajadasMax = 6;
    }

    if(this.conceptoIdSelected === 3){
      this.hsTrabajadasMin = -1;
      this.hsTrabajadasMax = 1;

      this.disable = true;

      this.jornadaForm = this.formBuilder.group({
        idEmpleado: [this.empleadoId, [Validators.required, Validators.min(1)]], 
        fecha: ['', [Validators.required]],
        hsTrabajadas:  ['0'],
      });
    }

    
  }

  jornadaForm!: FormGroup

  ngOnInit(): void {

    console.log(this.empleadoId);
    
    this.jornadaForm = this.formBuilder.group({
      idEmpleado: [this.empleadoId, [Validators.required, Validators.min(1)]], 
      fecha: ['', [Validators.required]],
      hsTrabajadas:  ['', [Validators.required, Validators.min(this.hsTrabajadasMin), Validators.max(this.hsTrabajadasMax)]],
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
