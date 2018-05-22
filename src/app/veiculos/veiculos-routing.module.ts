

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SuivVeiculoComponent } from './suiv-veiculo/suiv-veiculo.component';


const routes: Routes = [
  {
    path: 'suiv-veiculo',
    component: SuivVeiculoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
