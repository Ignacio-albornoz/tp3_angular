import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JornadaRequestModel } from 'src/app/models/jornada-request.model';
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

  constructor(private formBuilder: FormBuilder, private jornadaService: JornadaService){

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
      next:(result: any) => {

        console.log(result);
        
      },

      error:(e) => {
        console.log(e);
      }
    })
  }

}
