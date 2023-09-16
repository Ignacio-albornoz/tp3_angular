import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EmpleadoModel } from 'src/app/models/empleado.model';
import { Observable } from 'rxjs'
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
}
