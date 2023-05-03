import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Producto } from '../entidades/producto.class';
import { ProductosService } from '../productos.service';
import { ProductoAgregado } from '../entidades/producto-agregado.class';
import { InputCantidad } from '../interfaces/input-cantidad.interface';
import { ValueFormularioDetalle } from '../interfaces/value-formulariodetalle.interface';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.component.html',
  styleUrls: ['./realizar-pedido.component.css']
})
export class RealizarPedidoComponent implements OnInit{

  public comidas: Producto[] = [];
  public bebidas: Producto[] = [];
  public productos: Producto[];
  public comidasInputActivado: boolean[] = [];
  public bebidasInputActivado: boolean[] = [];
  public productosAgregados: number = 0;
  public inputCantidadArr: InputCantidad[] = []
  public formularioDetalle: FormGroup;

  constructor(private _productosService: ProductosService, private _fb:FormBuilder, private _carritoService: CarritoService){
    this.formularioDetalle = this._fb.group({});
    this.comidas = this._productosService.getComidas();
    this.bebidas = this._productosService.getBebidas();
    this.productos = this.comidas.concat(this.bebidas);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    


    for (let index = 0; index < this.comidas.length; index++) {

      //Se inicializan los inputs de cantidad como no activados.
      this.comidasInputActivado.push(false)

      //Se inicializan las cantidades a agregar de cada producto en 0.
      this.inputCantidadArr.push({
        idProducto: this.comidas[index].getId(),
        cantidad: 0
      })

      

      //Se declaran los campos de comida
      this.formularioDetalle.addControl(`campo_${this.comidas[index].getId()}`, this._fb.control(0))
      this.formularioDetalle.addControl(`observacion_${this.comidas[index].getId()}`, this._fb.control(""))

      let control =  this.formularioDetalle.get(`campo_${this.comidas[index].getId()}`);
      control?.setValidators([Validators.min(0)]) 
    }
  

    for (let index = 0; index < this.bebidas.length; index++) {

      //Se inicializan los inputs de cantidad como no activados.
      this.bebidasInputActivado.push(false)

      //Se inicializan las cantidades a agregar de cada producto en 0.
      this.inputCantidadArr.push({
        idProducto: this.bebidas[index].getId(),
        cantidad: 0
      })

      //Se declaran los campos de bebidas
      this.formularioDetalle.addControl(`campo_${this.bebidas[index].getId()}`, this._fb.control(0))
      this.formularioDetalle.addControl(`observacion_${this.bebidas[index].getId()}`, this._fb.control(""))

      let control =  this.formularioDetalle.get(`campo_${this.bebidas[index].getId()}`);
      control?.setValidators([Validators.min(0)]) 
    }
  }

  

  public activarInputComidas( i : number ): void{
    this.desactivarTodos();
    this.comidasInputActivado[i] = true;
  }

  public desactivarInputComidas( i : number ): void{
    this.comidasInputActivado[i] = false;
  }

  public activarInputBebidas( i : number ): void{
    this.desactivarTodos();
    this.bebidasInputActivado[i] = true;
  }

  public desactivarInputBebidas( i : number ): void{
    this.bebidasInputActivado[i] = false;
  }

  public desactivarTodos(): void{
    for (let index = 0; index < this.comidas.length; index++) {
      this.comidasInputActivado[index] = false;
      this.bebidasInputActivado[index] = false;
    
    }
  }

  public cantidadValida( id : number ):boolean{
    let productoEncontrado:any = -1;

    for(let producto of this.inputCantidadArr){
      
      if(producto.idProducto == id){
        productoEncontrado = producto;
        break;
      }

    }

    if(productoEncontrado == -1){
      return false;
    }

    if(productoEncontrado.cantidad > 0){
      return true;
    }

    return false;
  }


  // public agregarProducto( id : number): void{
  //   let div = <HTMLInputElement>document.querySelectorAll('.input-group.mb-3')[id];
  //   let producto = this.comidas[id];

  //   let cantidad = div.querySelector('#cantidad') as HTMLInputElement;
  //   let observacion = div.querySelector('#observacion') as HTMLInputElement;
  //   console.log(cantidad);
  //   console.log(observacion);
  //   let agregar:ProductoAgregado = new ProductoAgregado(producto, parseInt(cantidad.value), observacion.value); 
  //   this.productosAgregados.push(agregar);
  //   console.log(this.productosAgregados);
  // }


  public onSubmit( idCampo: number ): void{
    // console.log(this.formularioDetalle.value)
    // console.log(this.formularioDetalle.controls['campo_0'].errors?.['min'])

    let cantidad : number = this.formularioDetalle.controls["campo_" + idCampo].value;

    let observaciones: string = this.formularioDetalle.controls["observacion_" + idCampo].value;

    if(cantidad == 0){
      return;
    }

    let prodACarrito: ProductoAgregado = new ProductoAgregado( 
      this.buscarProductoPorId(idCampo),
      cantidad,
      observaciones
    )

    this._carritoService.agregarACarrito(prodACarrito);
    this.productosAgregados = this.productosAgregados + cantidad;
    this.formularioDetalle.controls["campo_" + idCampo].reset();
    this.formularioDetalle.controls["observacion_" + idCampo].reset();
    this.desactivarTodos();
    console.log(this._carritoService.getCarrito())
  }



  private buscarProductoPorId( id: number ): Producto{
    let productoEncontrado: Producto =  new Producto(-1, "No encontrado", -1, "0")
    for (const prod of this.productos) {
      if(prod.getId() == id){
        productoEncontrado = prod;
        break;
      }
    }

    return productoEncontrado;
  }



}
