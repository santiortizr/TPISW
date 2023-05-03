import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Producto } from '../entidades/producto.class';
import { ProductosService } from '../productos.service';
import { ProductoAgregado } from '../entidades/producto-agregado.class';
import { InputCantidad } from '../interfaces/input-cantidad.interface';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.component.html',
  styleUrls: ['./realizar-pedido.component.css']
})
export class RealizarPedidoComponent implements OnInit{

  public comidas: Producto[] = [];
  public bebidas: Producto[] = [];
  public comidasInputActivado: boolean[] = [];
  public bebidasInputActivado: boolean[] = [];
  public productosAgregados: ProductoAgregado[] = [];
  public inputCantidadArr: InputCantidad[] = []
  public formularioCantidad: FormGroup;

  constructor(private _productosService: ProductosService, private _fb:FormBuilder){
    this.formularioCantidad = this._fb.group({});

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.comidas = this._productosService.getComidas();
    this.bebidas = this._productosService.getBebidas();


    for (let index = 0; index < this.comidas.length; index++) {

      //Se inicializan los inputs de cantidad como no activados.
      this.comidasInputActivado.push(false)

      //Se inicializan las cantidades a agregar de cada producto en 0.
      this.inputCantidadArr.push({
        idProducto: this.comidas[index].getId(),
        cantidad: 0
      })

      //Se declaran los campos de comida
      this.formularioCantidad.addControl(`campo_${this.comidas[index].getId()}`, this._fb.control(0))
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
      this.formularioCantidad.addControl(`campo_${this.bebidas[index].getId()}`, this._fb.control(0))
      
    }
  }

  public activarInputComidas( i : number ): void{
    this.comidasInputActivado[i] = true;
  }

  public desactivarInputComidas( i : number ): void{
    this.comidasInputActivado[i] = false;
  }

  public activarInputBebidas( i : number ): void{
    this.bebidasInputActivado[i] = true;
  }

  public desactivarInputBebidas( i : number ): void{
    this.bebidasInputActivado[i] = false;
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

  public agregarProducto( producto:Producto ): void{
    console.log(this.inputCantidadArr);
  }

  public onSubmit(): void{
    console.log(this.formularioCantidad.value)
  }

}
