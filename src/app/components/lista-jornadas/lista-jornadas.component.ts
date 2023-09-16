import { Component } from '@angular/core';
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';

@Component({
  selector: 'app-lista-jornadas',
  templateUrl: './lista-jornadas.component.html',
  styleUrls: ['./lista-jornadas.component.css']
})
export class ListaJornadasComponent {

  listEmpleados: JornadaResponseModel[] = [];
  nombreColumnas: string[] = ['id', 'nroDocumento', 'nombreCompleto', 'fecha', 'concepto', 'hsTrabajadas' ];

  loading: boolean =  true;


}
