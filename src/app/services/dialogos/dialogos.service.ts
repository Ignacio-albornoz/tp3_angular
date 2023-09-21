import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from 'src/app/components/dialogo/dialogo.component';
import { EmpleadoService } from '../empleado/empleado.service';
import { ErrorMessageService } from '../error-message/error-message.service';
import { JornadaService } from '../jornada/jornada.service';
import { ResponseDTO } from 'src/app/models/responseDTO.model';

@Injectable({
  providedIn: 'root'
})
export class DialogosService {

  tieneJornadas: boolean = true;
  empleadoId: number = 0;
  nroDocumento: number = 0;

  constructor(public dialog: MatDialog,
    private empleadoService: EmpleadoService,
    private router: Router,
    private errorMessageService: ErrorMessageService,
    private jornadaService: JornadaService,
      
  ) {}

  deleteEmpleado(empleadoId: number){
    
    if(!this.tieneJornadas){
      this.errorMessageService.ErrorMessage('El empleado con id: ' + empleadoId + ' tiene una jornada asociada y no se puede eliminar')
    }

    this.empleadoService.deleteEmpleado(empleadoId).subscribe({
      next:(responseDTO: Object) => {

        this.errorMessageService.ErrorMessage('Se borro el empleado!');
        this.router.navigate(['/'])
      },

      error:(e) => {
        this.errorMessageService.ErrorMessage(e.error.message);
        
      }
    })
  }

  openDialog(empleadoId: number, nroDocumento: number) {

    if(empleadoId == 0){
      this.errorMessageService.ErrorMessage('Empleado id no valido');
    }
    
    if(nroDocumento == 0){
      this.errorMessageService.ErrorMessage('Nro Documento no valido');
    }

    this.empleadoId = empleadoId
    this.nroDocumento = nroDocumento

    const dialogRef = this.dialog.open(DialogoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.hasJornadas()
        this.deleteEmpleado(empleadoId)
        
      }
    });
  }

  hasJornadas(){
    this.jornadaService.hasJornada(this.nroDocumento).subscribe({
      next:(responseDTO: ResponseDTO) => {
        this.tieneJornadas = responseDTO.response;
      },

      error:(e) => {
        this.errorMessageService.ErrorMessage(e.error.message);
        
      }
    })
  }


}


