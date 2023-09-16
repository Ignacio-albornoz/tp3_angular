import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Components
import { ConceptoComponent } from './components/concepto/concepto.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component'; 

//Material
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ListaJornadasComponent } from './components/lista-jornadas/lista-jornadas.component'




@NgModule({
  declarations: [
    AppComponent,
    ConceptoComponent,
    EmpleadoComponent,
    ListaEmpleadosComponent,
    ListaJornadasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

