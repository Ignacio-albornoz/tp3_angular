import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ConceptoModel } from 'src/app/models/concepto.model';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {

  constructor(
    private http: HttpClient
  ) { }

  getAllConceptos(){
    return this.http.get<ConceptoModel[]>('http://localhost:8080/concepto ');
  }
}
