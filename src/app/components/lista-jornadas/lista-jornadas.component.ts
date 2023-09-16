import { Component } from '@angular/core';
import { JornadaResponseModel } from 'src/app/models/jornada-response.model';
import { JornadaService } from 'src/app/services/jornada/jornada.service';

@Component({
  selector: 'app-lista-jornadas',
  templateUrl: './lista-jornadas.component.html',
  styleUrls: ['./lista-jornadas.component.css']
})
export class ListaJornadasComponent {

  listJornadas: JornadaResponseModel[] = [];
  nombreColumnas: string[] = ['id', 'nroDocumento', 'nombreCompleto', 'fecha', 'concepto', 'hsTrabajadas'];

  loading: boolean =  true;

  constructor( private jornadaService: JornadaService){}

  ngOnInit(): void {
    this.getAllEmpleados()
  }

  getAllEmpleados(){
    this.jornadaService.getAllEmpleados().subscribe({
      next:(result: any) => {

        if(result as JornadaResponseModel){
          console.log(result);
          this.listJornadas = result;
          this.loading = false;
        } 
      },

      error:(e: any) => {
        console.log(e);
      }
    })
  }


}
