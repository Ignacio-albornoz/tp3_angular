import { EmailValidator } from "@angular/forms";

export interface EmpleadoModel{
    id: number;
    nroDocumento: number;
    nombre: String;
    apellido: String;
    email: EmailValidator;
    fechaNacimiento: Date;
    fechaInicio: Date;
    fechaIngreso: Date;
    fechaCreacion: Date;
}