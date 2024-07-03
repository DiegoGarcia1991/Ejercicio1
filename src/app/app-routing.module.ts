import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Bloque1Module } from './modules/bloque1/bloque1.module';
import { Bloque2Module } from './modules/bloque2/bloque2.module';
import { Bloque3Module } from './modules/bloque3/bloque3.module';

const routes: Routes = [
 // { path: '', component: PorteriaComponent },
 // { path: '', redirectTo: 'porteria', pathMatch: 'full' },
 // { path: 'porteria', component: PorteriaComponent },
  {
    path: 'bloque1',
   
    loadChildren: () =>
      import('./modules/bloque1/bloque1.module').then((m) => m.Bloque1Module),
  },

  {
    path: 'bloque2',
    component: Bloque2Module,
    loadChildren: () =>
      import('./modules/bloque2/bloque2.module').then((b) => b.Bloque2Module),
  },

  {
    path: 'bloque3',
    component: Bloque3Module,
    loadChildren: () =>
      import('./modules/bloque3/bloque3.module').then((x) => x.Bloque3Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
