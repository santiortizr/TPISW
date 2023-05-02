import { Injectable } from '@angular/core';
import { Producto } from './entidades/producto.class';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public comidas: Producto[];
  public bebidas: Producto[];


  constructor(){
    this.comidas = [
      new Producto('Big Mac', 1800, "Comida"),
      new Producto('Cuarto de libra', 1500, "Comida"),
      new Producto('Smoked BBQ', 2500, "Comida"),
      new Producto('Cajita Feliz', 1200, "Comida"),
      new Producto('Doble Cuarto de libra', 2000, "Comida")
    ];

    this.bebidas = [
      new Producto('Coca Cola', 500, "Bebida"),
      new Producto('Fanta', 500, "Bebida"),
      new Producto('Sprite', 500, "Bebida"),
      new Producto('Agua', 200, "Bebida"),
    ]
  }

  public getComidas(): Producto[]{
    return this.comidas;
  }

  public getBebidas(): Producto[]{
    return this.bebidas;
  }

}
