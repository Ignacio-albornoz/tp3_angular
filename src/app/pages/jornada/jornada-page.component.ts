import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jornada-page',
  templateUrl: './jornada-page.component.html',
  styleUrls: ['./jornada-page.component.css']
})
export class JornadaPageComponent {

  loading: boolean = true;


  empleadoId: number = 0;

  constructor(
    private route: ActivatedRoute
    ){

  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params =>{
      let idNumber = params.get('id')
      idNumber ? this.empleadoId = parseInt(idNumber) : null
      console.log(this.empleadoId);
      this.loading = false;
    })

  }

}
