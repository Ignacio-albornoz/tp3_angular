import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'

//Model
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';
import { JornadaRequestModel } from 'src/app/models/jornada-request.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class JornadaService {

  API_URL = environment.API_URL

  constructor(
    private http: HttpClient
  ) { }

  /**Llamados API */

  getAllJornadas(): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`${this.API_URL}/jornada`);
  }

  getJornadaByNrDocumento(nroDocumento: Number): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`${this.API_URL}/jornada?nroDocumento=${nroDocumento}`)
  }

  createJornada(jornadaDTO: JornadaRequestModel): Observable<ResponseDTO>{
    return this.http.post<ResponseDTO>(`${this.API_URL}/jornada`, jornadaDTO)
  }

  hasJornada(nroDocumento: number): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`${this.API_URL}/jornada/exists/${nroDocumento}`)
  }

}