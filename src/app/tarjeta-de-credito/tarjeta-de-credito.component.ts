import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-de-credito',
  templateUrl: './tarjeta-de-credito.component.html',
  styleUrls: ['./tarjeta-de-credito.component.css']
})
export class TarjetaDeCreditoComponent implements OnInit{
  
  public formularioTC!: FormGroup;
  public meses        : string[];

  constructor(private _fb: FormBuilder){
    this.meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  }

  ngOnInit(): void {
    this.formularioTC = this._fb.group({
      nroTarjeta: ['', [Validators.required, Validators.minLength(16)]],
      mesVenc   : [5, [Validators.required, Validators.min(1), Validators.max(12)]],
      anoVenc   : [2023, [Validators.required, Validators.min(2023)]],
      titular   : ['', [Validators.required]],
      cvc       : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    })
  }

  public onSubmit(){
    console.log(this.formularioTC.value)
  }

}
