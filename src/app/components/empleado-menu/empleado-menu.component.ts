import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DialogosService } from 'src/app/services/dialogos/dialogos.service';

@Component({
  selector: 'app-empleado-menu',
  templateUrl: './empleado-menu.component.html',
  styleUrls: ['./empleado-menu.component.css']
})
export class EmpleadoMenuComponent implements OnInit{

  /* Inputs & Outputs*/
  
  @Input() colorWhite: boolean = false;

  @Input() idEmpleado!: number; 

  @Input() nroDocumento!: number;

  @Output() handlerClickDelete = new EventEmitter<void>();


  menuIconColor: String = 'menu-icon';

  constructor(
    private dialogoService: DialogosService,
    private router: Router,
    ){}

  ngOnInit(): void {

    //se define el color del boton
    this.colorWhite ? this.menuIconColor = 'menu-icon-white' : 'menu-icon';
  }

  /**Llamados API */

  deleteEmpleado(){
    this.dialogoService.openDialog(this.idEmpleado, this.nroDocumento)

    this.handlerClickDelete.emit();
  }

   /**Otras funciones */

  navigationEmpleado(){
    this.router.navigate(['/empleado/', this.idEmpleado])
  }

}
