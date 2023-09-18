import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ConceptoModel } from 'src/app/models/concepto.model';
import { Observable } from 'rxjs'
import { ResponseDTO } from 'src/app/models/responseDTO.model';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {

  constructor(
    private http: HttpClient
  ) { }

  getAllConceptos(): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>('http://localhost:8080/concepto ');
  }
}
