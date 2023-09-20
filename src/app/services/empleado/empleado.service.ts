import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import { CreateAndUpdateEmpleadoDTOModel } from 'src/app/models/empleadoDTO.model';
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

  createEmpleado(empleadoDTO: CreateAndUpdateEmpleadoDTOModel): Observable<ResponseDTO>{
    return this.http.post<ResponseDTO>('http://localhost:8080/empleado', empleadoDTO)
  }

  updateEmpleado(empleadoDTO: CreateAndUpdateEmpleadoDTOModel): Observable<ResponseDTO>{
    return this.http.put<ResponseDTO>('http://localhost:8080/empleado', empleadoDTO)
  }

  deleteEmpleado(id: Number): Observable<Object>{
    return this.http.delete(`http://localhost:8080/empleado/${id}`)
  }

  existsByEmail(email: String): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`http://localhost:8080/empleado/exists/${email}`)
  }

  existsByNroDocumento(nroDocumento: number): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`http://localhost:8080/empleado/exists/nroDocumento/${nroDocumento}`)
  }
}
