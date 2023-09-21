import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import { CreateAndUpdateEmpleadoDTOModel } from 'src/app/models/empleadoDTO.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  API_URL = environment.API_URL

  constructor(
    private http: HttpClient
  ) { }

  /**Llamados API */

  getAllEmpleados(): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`${this.API_URL}/empleado`);
  }

  getEmpleadoById(id: Number): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`${this.API_URL}/empleado/${id}`)
  }

  createEmpleado(empleadoDTO: CreateAndUpdateEmpleadoDTOModel): Observable<ResponseDTO>{
    return this.http.post<ResponseDTO>(`${this.API_URL}/empleado`, empleadoDTO)
  }

  updateEmpleado(empleadoDTO: CreateAndUpdateEmpleadoDTOModel, id: Number): Observable<ResponseDTO>{
    return this.http.put<ResponseDTO>(`${this.API_URL}/empleado/${id}`, empleadoDTO)
  }

  deleteEmpleado(id: Number): Observable<Object>{
    return this.http.delete(`${this.API_URL}/empleado/${id}`)
  }

  existsByEmail(email: String): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`${this.API_URL}/empleado/exists/${email}`)
  }

  existsByNroDocumento(nroDocumento: number): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`${this.API_URL}/exists/nroDocumento/${nroDocumento}`)
  }
}
