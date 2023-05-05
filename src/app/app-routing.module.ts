import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PagoComponent } from './pago/pago.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TarjetaDeDebitoComponent } from './tarjeta-de-debito/tarjeta-de-debito.component';
import { PedidoFinalizadoComponent } from './pedido-finalizado/pedido-finalizado.component';

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
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'pedido-realizado',
    component: PedidoFinalizadoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
