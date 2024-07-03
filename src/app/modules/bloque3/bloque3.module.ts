import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Bloque3RoutingModule } from './bloque3-routing.module';
import { B3Ap101Component } from './b3-ap101/b3-ap101.component';
import { B3Ap102Component } from './b3-ap102/b3-ap102.component';
import { B3Ap103Component } from './b3-ap103/b3-ap103.component';
import { Bloque3Component } from './bloque3.component';


@NgModule({
  declarations: [
    Bloque3Component,
    B3Ap101Component,
    B3Ap102Component,
    B3Ap103Component,
    //FotoComponent
  ],
  imports: [
    CommonModule,
    Bloque3RoutingModule
  ]
})
export class Bloque3Module { }
