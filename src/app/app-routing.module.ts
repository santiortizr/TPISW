import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PagoComponent } from './pago/pago.component';

const routes: Routes = [
  {
    path: '',
    component: RealizarPedidoComponent,
    pathMatch: 'full'
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'pago',
    component: PagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
