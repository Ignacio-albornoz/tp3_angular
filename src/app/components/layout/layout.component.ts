import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private router: Router){}

  navigationJornada(){
    this.router.navigate(['/jornada/'])
  }

  navigationHome(){
    this.router.navigate(['/home/'])
  }

  navigationEmpleado(){
    this.router.navigate(['/empleado/'])
  }

}
