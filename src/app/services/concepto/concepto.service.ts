import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ConceptoModel } from 'src/app/models/concepto.model';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {

  constructor(
    private http: HttpClient
  ) { }

  getAllConceptos(): Observable<ConceptoModel[]>{
    return this.http.get<ConceptoModel[]>('http://localhost:8080/concepto ');
  }
}
