import { Injectable } from '@angular/core';
import { ProductoAgregado } from './entidades/producto-agregado.class';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito : ProductoAgregado[];

  constructor() { 
    this.carrito = [];
  }

  public agregarACarrito( prod:ProductoAgregado ): void{
    
    //Si ya existe el producto en el carrito, le suma la cantidad ingresada.
    for( let item of this.carrito ){
      if(item.getIdProducto() == prod.getIdProducto()){
        item.setCantidad( item.getCantidad() + prod.getCantidad() )
        return;
      }
    }

    //Si no existiese, se agrega al carrito.
    this.carrito.push(prod)
    
  }

  public getCarrito(): ProductoAgregado[]{
    return this.carrito;
  }

  

}
