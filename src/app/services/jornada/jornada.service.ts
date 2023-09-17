import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'

//Model
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';
import { JornadaRequestModel } from 'src/app/models/jornada-request.model';

@Injectable({
  providedIn: 'root'
})
export class JornadaService {

  constructor(
    private http: HttpClient
  ) { }

  getAllJornadas(): Observable<JornadaResponseModel[]>{
    return this.http.get<JornadaResponseModel[]>('http://localhost:8080/jornada');
  }

  getJornadaByNrDocumento(nroDocumento: Number): Observable<JornadaResponseModel>{
    return this.http.get<JornadaResponseModel>(`http://localhost:8080/jornada?nroDocumento=${nroDocumento}`)
  }

  createJornada(jornadaDTO: JornadaRequestModel): Observable<JornadaResponseModel>{
    return this.http.post<JornadaResponseModel>('http://localhost:8080/jornada', jornadaDTO)
  }

}