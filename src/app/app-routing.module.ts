import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';

const routes: Routes = [
  {
    path: '',
    component: RealizarPedidoComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
