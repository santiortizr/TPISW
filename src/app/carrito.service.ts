import { Injectable } from '@angular/core';
import { ProductoAgregado } from './entidades/producto-agregado.class';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito : ProductoAgregado[] = [];
  private carritoSubject: Subject<ProductoAgregado[]> = new Subject<ProductoAgregado[]>;

  constructor() { 
  }

  public agregarACarrito( prod:ProductoAgregado ): void{
  

    //Si ya existe el producto en el carrito, le suma la cantidad ingresada.
    for( let item of this.carrito ){
      if(item.getIdProducto() == prod.getIdProducto()){
        item.setCantidad( item.getCantidad() + prod.getCantidad() )
        // this.carritoSubject.next( this.carrito )
        return;
      }
    }

    // Si no existiese, se agrega al carrito.
    this.carrito.push(prod);
    // this.carritoSubject.next( this.carrito )
    console.log(this.carrito); 
    
  }

  public getCarrito(): ProductoAgregado[]{
    return this.carrito;
  }

}
