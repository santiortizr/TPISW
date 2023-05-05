import { Component, OnInit } from '@angular/core';
import { TarjetaDeCreditoComponent } from '../tarjeta-de-credito/tarjeta-de-credito.component';
import { EfectivoComponent } from '../efectivo/efectivo.component';
import { TarjetaDeDebitoComponent } from '../tarjeta-de-debito/tarjeta-de-debito.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  
  public componenteCargado: any;
  public opcionPagoSeleccionada: string = "efectivo";

  ngOnInit(): void {
    console.log("Hola")
  }
  constructor(){
    this.componenteCargado = EfectivoComponent;
  }

  public determinarMetodoDePago(){
    if(this.opcionPagoSeleccionada == "credito"){
      this.componenteCargado = TarjetaDeCreditoComponent;
      return
    }else if(this.opcionPagoSeleccionada == "debito"){
      this.componenteCargado = TarjetaDeDebitoComponent;
      return
    }
    this.componenteCargado = EfectivoComponent;
  }

}
