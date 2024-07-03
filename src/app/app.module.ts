import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorteriaComponent } from './modules/porteria/porteria.component';
import { Bloque1Module } from './modules/bloque1/bloque1.module';
import { Bloque2Module } from './modules/bloque2/bloque2.module';
import { Bloque3Module } from './modules/bloque3/bloque3.module';
import { Bloque1RoutingModule } from './modules/bloque1/bloque1-routing.module';
import { Bloque2RoutingModule } from './modules/bloque2/bloque2-routing.module';
import { Bloque3RoutingModule } from './modules/bloque3/bloque3-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PorteriaComponent, 
  ],
  // aca se debe de importar los modulos de cada modulo
  // que se deba de usar
  imports: [
    BrowserModule,
    AppRoutingModule,
    Bloque1Module,
    Bloque1RoutingModule,
    Bloque2Module,
    Bloque2RoutingModule,
    Bloque3Module,
    Bloque3RoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
