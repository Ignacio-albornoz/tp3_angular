import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogosService } from 'src/app/services/dialogos/dialogos.service';

@Component({
  selector: 'app-empleado-menu',
  templateUrl: './empleado-menu.component.html',
  styleUrls: ['./empleado-menu.component.css']
})
export class EmpleadoMenuComponent implements OnInit{
  
  @Input() colorWhite: boolean = false;

  @Input() idEmpleado!: number; 

  @Output() handlerClickDelete = new EventEmitter<void>(); // declarar el evento de salida

  menuIconColor: String = 'menu-icon';

  constructor(private dialogoService: DialogosService){}

  ngOnInit(): void {
    this.colorWhite ? this.menuIconColor = 'menu-icon-white' : 'menu-icon';
  }

  deleteEmpleado(){

    this.dialogoService.openDialog(this.idEmpleado)
    this.handlerClickDelete.emit();
 
  }

}
