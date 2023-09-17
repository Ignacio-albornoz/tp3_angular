import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { Observable } from 'rxjs'
import { CreateEmpleadoDTOModel, UpdateEmpleadoDTOModel } from 'src/app/models/empleadoDTO.model';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEmpleados(): Observable<EmpleadoModel[]>{
    return this.http.get<EmpleadoModel[]>('http://localhost:8080/empleado');
  }

  getEmpleadoById(id: Number): Observable<EmpleadoModel>{
    return this.http.get<EmpleadoModel>(`http://localhost:8080/empleado/${id}`)
  }

  createEmpleado(empleadoDTO: CreateEmpleadoDTOModel): Observable<EmpleadoModel>{
    return this.http.post<EmpleadoModel>('http://localhost:8080/empleado', empleadoDTO)
  }

  updateEmpleado(empleadoDTO: UpdateEmpleadoDTOModel): Observable<EmpleadoModel>{
    return this.http.put<EmpleadoModel>('http://localhost:8080/empleado', empleadoDTO)
  }
}
