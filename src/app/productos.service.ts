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
      new Producto(0,'Big Mac', 1800, "Comida"),
      new Producto(1,'Cuarto de libra', 1500, "Comida"),
      new Producto(2, 'Smoked BBQ', 2500, "Comida"),
      new Producto(3,'Cajita Feliz', 1200, "Comida"),
      new Producto(4,'Doble Cuarto de libra', 2000, "Comida")
    ];

    this.bebidas = [
      new Producto(5,'Coca Cola', 500, "Bebida"),
      new Producto(6,'Fanta', 500, "Bebida"),
      new Producto(7,'Sprite', 500, "Bebida"),
      new Producto(8,'Agua', 200, "Bebida"),
    ]
  }

  public getComidas(): Producto[]{
    return this.comidas;
  }

  public getBebidas(): Producto[]{
    return this.bebidas;
  }

}
