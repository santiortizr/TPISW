import { Component, Inject } from '@angular/core';
import { Producto } from '../entidades/producto.class';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.component.html',
  styleUrls: ['./realizar-pedido.component.css']
})
export class RealizarPedidoComponent {

  public comidas: Producto[] = [];
  public bebidas: Producto[] = [];

  constructor(private _productosService: ProductosService){
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.comidas = this._productosService.getComidas();
    this.bebidas = this._productosService.getBebidas();
  }

  

}
