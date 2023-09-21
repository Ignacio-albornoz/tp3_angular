import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {

  API_URL = environment.API_URL

  constructor(
    private http: HttpClient
  ) { }

  /**Llamados API */

  getAllConceptos(): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`${this.API_URL}/concepto`);
  }
}
