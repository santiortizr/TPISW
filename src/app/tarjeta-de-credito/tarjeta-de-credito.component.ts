import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateCreditCard, validateDate } from '../validators/validators';
import { FormularioAccesible } from '../interfaces/formularioAccesible.interface';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-tarjeta-de-credito',
  templateUrl: './tarjeta-de-credito.component.html',
  styleUrls: ['./tarjeta-de-credito.component.css']
})
export class TarjetaDeCreditoComponent implements OnInit{
  
  public formularioTC!: FormGroup;
  public meses        : string[];

  constructor(private _fb: FormBuilder, private _carritoService: CarritoService){
    this.meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  }

  ngOnInit(): void {
    this.formularioTC = this._fb.group({
      nroTarjeta: ['', [Validators.required, Validators.minLength(16), validateCreditCard]],
      fechaVenc : ["05/2023", [Validators.required, Validators.minLength(7), validateDate] ],
      titular   : ['', [Validators.required]],
      cvc       : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    })
  }

  public onSubmit(){
    console.log(this.formularioTC.value)
    this._carritoService.limpiarCarrito();
  }


  public checkErrors(){
    console.log(this.formularioTC.controls["nroTarjeta"].errors)
    console.log(this.formularioTC.controls["fechaVenc"].errors)
    console.log(this.formularioTC.controls["titular"].errors)
    console.log(this.formularioTC.controls["cvc"].errors)
  }

}
