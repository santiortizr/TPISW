import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CarritoService } from './carrito.service';
import { PagoComponent } from './pago/pago.component';
import { EfectivoComponent } from './efectivo/efectivo.component';
import { TarjetaDeCreditoComponent } from './tarjeta-de-credito/tarjeta-de-credito.component';
import { TarjetaDeDebitoComponent } from './tarjeta-de-debito/tarjeta-de-debito.component';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { PedidoFinalizadoComponent } from './pedido-finalizado/pedido-finalizado.component';

@NgModule({
  declarations: [
    AppComponent,
    RealizarPedidoComponent,
    CarritoComponent,
    PagoComponent,
    EfectivoComponent,
    TarjetaDeCreditoComponent,
    TarjetaDeDebitoComponent,
    CheckoutComponent,
    PedidoFinalizadoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ CarritoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
