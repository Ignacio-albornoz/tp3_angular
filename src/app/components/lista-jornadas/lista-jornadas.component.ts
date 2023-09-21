import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() listJornadas!: JornadaResponseModel[];

  nombreColumnas: string[] = ['id', 'nroDocumento', 'nombreCompleto', 'fecha', 'concepto', 'hsTrabajadas'];
  nombreColumnasMinimal: string[] = ['fecha', 'concepto', 'hsTrabajadas'];

  loading: boolean =  true;

  constructor(){}

  ngOnInit(): void {

    this.listJornadas = this.listJornadas
    this.loading = false;
    
  }

  //Se evalua si el empleado tiene jornadas
  
}
