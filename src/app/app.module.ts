import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CarritoService } from './carrito.service';

@NgModule({
  declarations: [
    AppComponent,
    RealizarPedidoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ CarritoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
