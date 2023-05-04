import { Component, OnInit } from '@angular/core';
import { ProductoAgregado } from '../entidades/producto-agregado.class';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  
  public productosEnCarrito: ProductoAgregado[] = [];

  constructor(private _carritoService: CarritoService){
  }

  ngOnInit(): void {
    this.productosEnCarrito = this._carritoService.getCarrito();

  }


}
