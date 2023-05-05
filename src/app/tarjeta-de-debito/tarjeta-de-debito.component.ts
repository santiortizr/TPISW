import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateCreditCard, validateDate } from '../validators/validators';
import { FormularioAccesible } from '../interfaces/formularioAccesible.interface';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-tarjeta-de-debito',
  templateUrl: './tarjeta-de-debito.component.html',
  styleUrls: ['./tarjeta-de-debito.component.css']
})
export class TarjetaDeDebitoComponent {
  public formularioTD!: FormGroup;
  public meses        : string[];

  constructor(private _fb: FormBuilder, private _carritoService: CarritoService){
    this.meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  }

  ngOnInit(): void {
    this.formularioTD = this._fb.group({
      nroTarjeta: ['', [Validators.required, Validators.minLength(16), validateCreditCard]],
      fechaVenc : ["05/2023", [Validators.required, Validators.minLength(7), validateDate] ],
      titular   : ['', [Validators.required]],
      cvc       : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    })
  }

  public onSubmit(){
    console.log(this.formularioTD.value)
    this._carritoService.limpiarCarrito();
  }

  public obtenerFormulario(): FormGroup<any> {
    return this.formularioTD;
  }

  public checkErrors(){
    console.log(this.formularioTD.controls["nroTarjeta"].errors)
    console.log(this.formularioTD.controls["fechaVenc"].errors)
    console.log(this.formularioTD.controls["titular"].errors)
    console.log(this.formularioTD.controls["cvc"].errors)
  }
}
