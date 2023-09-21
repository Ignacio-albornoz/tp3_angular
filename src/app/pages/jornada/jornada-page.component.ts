import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';
import { ResponseDTO } from 'src/app/models/responseDTO.model';
import { ErrorMessageService } from 'src/app/services/error-message/error-message.service';
import { JornadaService } from 'src/app/services/jornada/jornada.service';

@Component({
  selector: 'app-jornada-page',
  templateUrl: './jornada-page.component.html',
  styleUrls: ['./jornada-page.component.css']
})
export class JornadaPageComponent {

  listJornadas: JornadaResponseModel[] = [];
  loading: boolean = true;
  empleadoId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private jornadaService: JornadaService,
    private errorMessageService: ErrorMessageService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.getAllJornadas()
    this.route.paramMap.subscribe(params =>{
      let idNumber = params.get('id')
      idNumber ? this.empleadoId = parseInt(idNumber) : null
      this.loading = false;
    })

  }
  
  /**Llamados API */

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

  /** Deberia actualizar la lista luego que se cree una jornada. Pero no funciona */
  handleAddJornada(event: any){
    this.loading = true;
    this.listJornadas.push(event);
    this.loading = false;
  }


}
