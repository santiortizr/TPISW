import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-efectivo',
  templateUrl: './efectivo.component.html',
  styleUrls: ['./efectivo.component.css']
})
export class EfectivoComponent implements OnInit{
  public formularioEfectivo!: FormGroup;
  public montoMinimo: number;

  constructor(private _carritoService: CarritoService, private _fb: FormBuilder){
    this.montoMinimo = this._carritoService.getTotal();
  }

  ngOnInit(): void {
    this.formularioEfectivo = this._fb.group({
      monto: [this.montoMinimo, [Validators.required, Validators.min(this.montoMinimo)]]
    })
  }

  
  
}
