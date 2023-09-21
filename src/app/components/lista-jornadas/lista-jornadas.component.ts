import { Component, Input } from '@angular/core';
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';



@Component({
  selector: 'app-lista-jornadas',
  templateUrl: './lista-jornadas.component.html',
  styleUrls: ['./lista-jornadas.component.css']
})
export class ListaJornadasComponent {

  /* Inputs & Outputs*/

  //si es true, renderiza los datos minimos en el contexto de un empleado
  @Input() minimalListActive: Boolean = false;

  @Input() listJornadas!: JornadaResponseModel[];

  /*Columnas para table material*/
  nombreColumnas: string[] = ['id', 'nroDocumento', 'nombreCompleto', 'fecha', 'concepto', 'hsTrabajadas'];
  /*Columnas para table material minimal*/
  nombreColumnasMinimal: string[] = ['fecha', 'concepto', 'hsTrabajadas'];

  loading: boolean =  true;

  constructor(){}

  ngOnInit(): void {

    this.loading = false;
    
  }
}
