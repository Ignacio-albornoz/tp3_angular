import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Components
import { ConceptoComponent } from './components/concepto/concepto.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { ListaJornadasComponent } from './components/lista-jornadas/lista-jornadas.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component'
import { JornadaFormComponent } from './components/jornada-form/jornada-form.component';
import { EmpleadoMenuComponent } from './components/empleado-menu/empleado-menu.component';


//Material
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogoComponent } from './components/dialogo/dialogo.component';


@NgModule({
  declarations: [
    AppComponent,
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
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

