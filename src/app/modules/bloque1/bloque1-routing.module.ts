import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bloque1Component } from './bloque1.component';
import { B1Ap101Component } from './b1-ap101/b1-ap101.component';
import { B1Ap102Component } from './b1-ap102/b1-ap102.component';
import { B1Ap103Component } from './b1-ap103/b1-ap103.component';

const routes: Routes = [
  {path: 'bloque1', component: Bloque1Component,
  children:[
    {path:'ap101', component: B1Ap101Component},
    {path:'ap102', component: B1Ap102Component},
    {path:'ap103', component: B1Ap103Component}
  ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bloque1RoutingModule { }
