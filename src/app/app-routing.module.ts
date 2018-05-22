import { AppComponent } from './app.component';
import { SuivVeiculoComponent } from './veiculos/suiv-veiculo/suiv-veiculo.component';
import { NgModule } from '@angular/core';



import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: AppComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
