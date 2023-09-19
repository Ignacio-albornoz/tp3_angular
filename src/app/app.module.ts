import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//Router
import { AppRoutingModule } from './app-routing.module';

//Components
import { ConceptoComponent } from './components/concepto/concepto.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { ListaJornadasComponent } from './components/lista-jornadas/lista-jornadas.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component'
import { JornadaFormComponent } from './components/jornada-form/jornada-form.component';
import { EmpleadoMenuComponent } from './components/empleado-menu/empleado-menu.component';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import { HomePageComponent } from "./pages/home/home-page.component";
import { EmpleadoPageComponent } from "./pages/empleado/empleado-page.component";
import { JornadaPageComponent } from "./pages/jornada/jornada-page.component";

//Shareds
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    JornadaPageComponent,
    EmpleadoPageComponent,
    ConceptoComponent,
    EmpleadoComponent,
    ListaEmpleadosComponent,
    ListaJornadasComponent,
    EmpleadoFormComponent,
    JornadaFormComponent,
    EmpleadoMenuComponent,
    DialogoComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

