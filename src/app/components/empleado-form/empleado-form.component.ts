import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatError } from '@angular/material/form-field';




@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit{

  constructor(private formBuilder: FormBuilder){}

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


}
