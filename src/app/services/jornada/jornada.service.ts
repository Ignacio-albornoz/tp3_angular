import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'

//Model
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';
import { JornadaRequestModel } from 'src/app/models/jornada-request.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';

@Injectable({
  providedIn: 'root'
})
export class JornadaService {

  constructor(
    private http: HttpClient
  ) { }

  getAllJornadas(): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>('http://localhost:8080/jornada');
  }

  getJornadaByNrDocumento(nroDocumento: Number): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`http://localhost:8080/jornada?nroDocumento=${nroDocumento}`)
  }

  createJornada(jornadaDTO: JornadaRequestModel): Observable<ResponseDTO>{
    return this.http.post<ResponseDTO>('http://localhost:8080/jornada', jornadaDTO)
  }

  hasJornada(nroDocumento: number): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`http://localhost:8080/jornada/exists/${nroDocumento}`)
  }

}