import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Bloque1RoutingModule } from './bloque1-routing.module';
import { FotoComponent } from 'src/app/common/foto/foto.component';
import { Bloque1Component }  from './bloque1.component';
import { B1Ap101Component } from './b1-ap101/b1-ap101.component';
import { B1Ap102Component } from './b1-ap102/b1-ap102.component';
import { B1Ap103Component } from './b1-ap103/b1-ap103.component';


@NgModule({
  declarations: [
    
    Bloque1Component,
    B1Ap101Component,
    B1Ap102Component,
    B1Ap103Component,
    FotoComponent
  ],
  imports: [
    CommonModule,
    Bloque1RoutingModule
  ]
})
export class Bloque1Module { }
