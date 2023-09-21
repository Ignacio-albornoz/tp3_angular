import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  /**Encargado de dar Feedback al usuario, mal llamado ErrorMassage, es solo message*/

  constructor(private snackBar: MatSnackBar) { }

  ErrorMessage(errorMessage: string, buttonText: string = 'OK') {
    this.snackBar.open( errorMessage.concat('. '), buttonText,{
      duration: 10000
    });
  }
}
