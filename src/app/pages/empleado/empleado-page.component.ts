import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-empleado-page',
  templateUrl: './empleado-page.component.html',
  styleUrls: ['./empleado-page.component.css']
})
export class EmpleadoPageComponent implements OnInit{

  empleadoId: number = 0;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      let idNumber = params.get('id')
      idNumber ? this.empleadoId = parseInt(idNumber) : null
      console.log(this.empleadoId);
      
    })
  }



}
