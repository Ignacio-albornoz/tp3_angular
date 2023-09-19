import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogoComponent } from 'src/app/components/dialogo/dialogo.component';
import { EmpleadoService } from '../empleado/empleado.service';
import { ErrorMessageService } from '../error-message/error-message.service';

@Injectable({
  providedIn: 'root'
})
export class DialogosService {

  constructor(public dialog: MatDialog, private empleadoService: EmpleadoService, private errorMessageService: ErrorMessageService) {}

  deleteEmpleado(empleadoId: number){
    this.empleadoService.deleteEmpleado(empleadoId).subscribe({
      next:(responseDTO: Object) => {
        console.log(responseDTO);
      },

      error:(e) => {
        this.errorMessageService.ErrorMessage(e.error.message)
      }
    })
  }

  openDialog(empleadoId: number): void {
    const dialogRef = this.dialog.open(DialogoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteEmpleado(empleadoId)
      }
    });
  }
}


