import { Component, OnInit } from '@angular/core';
import { ConceptoModel } from '../../models/concepto.model'
import { ConceptoService } from 'src/app/services/concepto/concepto.service';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';



@Component({
  selector: 'app-concepto',
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css'],
})


export class ConceptoComponent implements OnInit {

  concepto: ConceptoModel[] = [];
  loading: boolean = true;

  nombreColumnas: string[] = ['id', 'nombre', 'laborable', 'hsMinimo', 'hsMaximo'];
  
  constructor( private _conceptoService: ConceptoService, private errorMessageService: ErrorMessageService){}

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
          responseDTO.message.map(message => message ? this.errorMessageService.ErrorMessage(message) : null )
        }
      },

      error:(e) => {
        this.errorMessageService.ErrorMessage(e.error.message)
      }
    })
  }

}
