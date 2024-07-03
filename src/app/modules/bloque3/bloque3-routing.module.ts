import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bloque3Component } from './bloque3.component';
import { B3Ap101Component } from './b3-ap101/b3-ap101.component';
import { B3Ap102Component } from './b3-ap102/b3-ap102.component';
import { B3Ap103Component } from './b3-ap103/b3-ap103.component';

const routes: Routes = [
  {path: 'bloque3', component: Bloque3Component,
  children:[
    {path:'ap101', component: B3Ap101Component},
    {path:'ap102', component: B3Ap102Component},
    {path:'ap103', component: B3Ap103Component}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bloque3RoutingModule { }
