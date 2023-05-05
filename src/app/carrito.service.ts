import { Injectable } from '@angular/core';
import { ProductoAgregado } from './entidades/producto-agregado.class';
import { Observable, Subject } from 'rxjs';
import { Producto } from './entidades/producto.class';

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

  public eliminarItemDeCarrito( id:number ):void{
    for (let i = 0; i < this.carrito.length; i++) {
      if( id == this.carrito[i].getIdProducto() ){
        this.carrito.splice(i, 1);
        break;
      }
    }
    console.log(this.carrito)   
  }

  public buscarProductoPorId( id:number ):ProductoAgregado{
    let productoEncontrado = new ProductoAgregado(
      new Producto(-1, "-1", -1, "-1"),
      -1,
      "-1"
    )
    for (let i = 0; i < this.carrito.length; i++) {
      if(this.carrito[i].getIdProducto() == id){
        productoEncontrado = this.carrito[i];  
        break;
      }
    }
  return productoEncontrado;
  }

  public actualizarCarrito( nuevoCarrito: ProductoAgregado[] ): void{
    console.log(nuevoCarrito)
    this.carrito = nuevoCarrito;
  }

  public getTotal(): number {
    let subtotal: number = 0;
    for(let elem of this.carrito){
      subtotal += elem.getCantidad() * elem.getProducto().getPrecio();
    }

    return subtotal;
  }

  public limpiarCarrito(){
    this.carrito.splice(0, this.carrito.length)
  }
  
}
