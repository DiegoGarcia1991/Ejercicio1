import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Bloque2RoutingModule } from './bloque2-routing.module';
import { B2Ap101Component } from './b2-ap101/b2-ap101.component';
import { B2Ap102Component } from './b2-ap102/b2-ap102.component';
import { B2Ap103Component } from './b2-ap103/b2-ap103.component';
import { Bloque2Component } from './bloque2.component';


@NgModule({
  declarations: [
    Bloque2Component,
    B2Ap101Component,
    B2Ap102Component,
    B2Ap103Component,

    //FotoComponent
  ],
  imports: [
    CommonModule,
    Bloque2RoutingModule
  ]
})
export class Bloque2Module { }
