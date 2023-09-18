import { Component, OnInit } from '@angular/core';
import { ConceptoModel } from '../../models/concepto.model'
import { ConceptoService } from 'src/app/services/concepto/concepto.service';
import { ResponseDTO } from 'src/app/models/responseDTO.model';



@Component({
  selector: 'app-concepto',
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css'],
})


export class ConceptoComponent implements OnInit {

  concepto: ConceptoModel[] = [];
  loading: Boolean = true;

  nombreColumnas: string[] = ['id', 'nombre', 'laborable', 'hsMinimo', 'hsMaximo'];
  
  constructor(
    private _conceptoService: ConceptoService
  ){}

  ngOnInit(): void {
 
    this.getConceptos();
  }

  getConceptos(){
    this._conceptoService
    .getAllConceptos()
    .subscribe({
      next:(responseDTO: ResponseDTO) => {

        if(responseDTO.isSuccess){
          this.concepto = responseDTO.response as ConceptoModel[];
          this.loading = false;
        }
        else {
          console.error(responseDTO.message)
        }
      },

      error:(e) => {
        console.log(e);
      }
    })
  }

}
