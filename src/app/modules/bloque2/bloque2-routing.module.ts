import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { B2Ap101Component } from './b2-ap101/b2-ap101.component';
import { B2Ap102Component } from './b2-ap102/b2-ap102.component';
import { B2Ap103Component } from './b2-ap103/b2-ap103.component';
import { Bloque2Component } from './bloque2.component';

const routes: Routes = [
  {path: 'bloque2', component: Bloque2Component,
  children:[
    {path:'ap101', component: B2Ap101Component},
    {path:'ap102', component: B2Ap102Component},
    {path:'ap103', component: B2Ap103Component}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bloque2RoutingModule { }
