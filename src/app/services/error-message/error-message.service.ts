import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  constructor(private snackBar: MatSnackBar) { }

  ErrorMessage(errorMessage: string, buttonText: string = 'OK') {
    this.snackBar.open( errorMessage.concat('. '), buttonText,{
      duration: 10000
    });
  }
}
