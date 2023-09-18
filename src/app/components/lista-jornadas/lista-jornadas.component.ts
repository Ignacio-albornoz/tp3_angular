import { Component, Input } from '@angular/core';
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';
import { JornadaService } from 'src/app/services/jornada/jornada.service';


@Component({
  selector: 'app-lista-jornadas',
  templateUrl: './lista-jornadas.component.html',
  styleUrls: ['./lista-jornadas.component.css']
})
export class ListaJornadasComponent {

  @Input() minimalListActive: Boolean = false;
  @Input() minimalList: JornadaResponseModel[] = [];



  listJornadas: JornadaResponseModel[] = [];
  nombreColumnas: string[] = ['id', 'nroDocumento', 'nombreCompleto', 'fecha', 'concepto', 'hsTrabajadas'];
  nombreColumnasMinimal: string[] = ['fecha', 'concepto', 'hsTrabajadas'];

  loading: boolean =  true;

  constructor( private jornadaService: JornadaService, private errorMessageService: ErrorMessageService){}

  ngOnInit(): void {
   
    this.useInputList();
    

    console.log(this.listJornadas);
    
    
  }
  useInputList(){
    this.minimalList.length > 0 ? this.listJornadas = this.minimalList : this.getAllJornadas()
    this.loading = false
  }

  getAllJornadas(){
    this.jornadaService.getAllJornadas().subscribe({
      next:(responseDTO: ResponseDTO) => {

        if(responseDTO.isSuccess){

          this.listJornadas = responseDTO.response as JornadaResponseModel[];
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
