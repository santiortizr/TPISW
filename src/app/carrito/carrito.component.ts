import { Component, OnInit } from '@angular/core';
import { ProductoAgregado } from '../entidades/producto-agregado.class';
import { CarritoService } from '../carrito.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  
  public productosEnCarrito: ProductoAgregado[] = [];
  public formularioCarrito : FormGroup;
    
  constructor(private _carritoService: CarritoService,
              private _fb: FormBuilder){
    this.formularioCarrito = _fb.group({});
  }

  ngOnInit(): void {
    //obtener productos en carrito
    this.productosEnCarrito = this._carritoService.getCarrito();
  
    //inicializar formularios
    for ( let i = 0; i < this.productosEnCarrito.length; i++) {
      this.formularioCarrito.addControl(`campo_${this.productosEnCarrito[i].getIdProducto()}`, this._fb.control( this.productosEnCarrito[i].getCantidad() ));
      this.formularioCarrito.addControl(`observacion_${this.productosEnCarrito[i].getIdProducto()}`, this._fb.control( this.productosEnCarrito[i].getEspecificaciones() ));

      //Se obtienen los campos
      let controlCantidad =  this.formularioCarrito.get(`campo_${this.productosEnCarrito[i].getIdProducto()}`);
      let controlObservacion = this.formularioCarrito.get(`observacion_${this.productosEnCarrito[i].getIdProducto()}`);
      
      //Se setean las validaciones de campo cantidad.
      controlCantidad?.setValidators([Validators.min(0), Validators.required]) 
      
      
    }
  }

  public eliminarItemDeCarrito( id:number ):void{
    for (let i = 0; i < this.productosEnCarrito.length; i++) {
      if( id == this.productosEnCarrito[i].getIdProducto() ){
        this.productosEnCarrito.splice(i, 1);
        break;
      }
    }
    this._carritoService.eliminarItemDeCarrito(id);   
  }

  public getSubtotal( item: ProductoAgregado ): number{
    let id = item.getIdProducto()
    let controlCantidad =  this.formularioCarrito.get(`campo_${id}`);
    if(controlCantidad?.value === null || controlCantidad?.value < 0){
      return 0;
    }
  
    return item.getProducto().getPrecio() * controlCantidad!.value;
 
  }
  

}
