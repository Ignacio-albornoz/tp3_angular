import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { Observable } from 'rxjs'
import { CreateEmpleadoDTOModel, UpdateEmpleadoDTOModel } from 'src/app/models/empleadoDTO.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEmpleados(): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>('http://localhost:8080/empleado');
  }

  getEmpleadoById(id: Number): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`http://localhost:8080/empleado/${id}`)
  }

  createEmpleado(empleadoDTO: CreateEmpleadoDTOModel): Observable<ResponseDTO>{
    return this.http.post<ResponseDTO>('http://localhost:8080/empleado', empleadoDTO)
  }

  updateEmpleado(empleadoDTO: UpdateEmpleadoDTOModel): Observable<ResponseDTO>{
    return this.http.put<ResponseDTO>('http://localhost:8080/empleado', empleadoDTO)
  }

  deleteEmpleado(id: Number): Observable<Object>{
    return this.http.delete(`http://localhost:8080/empleado/${id}`)
  }
}
