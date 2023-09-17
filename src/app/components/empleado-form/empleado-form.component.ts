import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatError } from '@angular/material/form-field';
import { CreateEmpleadoDTOModel } from 'src/app/models/empleadoDTO.model';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';




@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit{

empleadoCreateDto!: CreateEmpleadoDTOModel;

  //Validador DataPicker
  maxDate: Date;
  menorDeDeEdadDate: Date;


  constructor(private formBuilder: FormBuilder, private empleadoService: EmpleadoService){

    const fechaActual = Date.now();
    const timeStamp18Year = 568000253700;
    
    this.menorDeDeEdadDate = new Date(fechaActual - timeStamp18Year);
    this.maxDate = new Date(fechaActual);
  }

  empleadoForm!: FormGroup

  ngOnInit(): void {
    this.empleadoForm = this.formBuilder.group({
      nroDocumento: ['', [Validators.required, Validators.min(1)]], 
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
      next:(result: any) => {

        console.log(result);
        
      },

      error:(e) => {
        console.log(e);
      }
    })
  }


}
