import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConceptoComponent } from './components/concepto/concepto.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Material
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    ConceptoComponent,
    
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

