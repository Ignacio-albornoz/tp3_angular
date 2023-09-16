import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'

//Model
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';

@Injectable({
  providedIn: 'root'
})
export class JornadaService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEmpleados(): Observable<JornadaResponseModel[]>{
    return this.http.get<JornadaResponseModel[]>('http://localhost:8080/jornada');
  }
}