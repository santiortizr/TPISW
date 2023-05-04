import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '../interfaces/select.interface';
import { EfectivoComponent } from '../efectivo/efectivo.component';
import { TarjetaDeCreditoComponent } from '../tarjeta-de-credito/tarjeta-de-credito.component';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit{
  public ciudades: string[];
  public formularioDireccion!: FormGroup;
  public opcionesDePago: Select[];
  public opcionDePagoSeleccionada: string;
  public componenteCargado: any = TarjetaDeCreditoComponent;

  constructor(private _fb: FormBuilder){
    this.ciudades = [
      '',
      'Buenos Aires',
      'Catamarca',
      'Corrientes',
      'Córdoba',
      'Formosa',
      'La Plata',
      'La Rioja',
      'Mendoza',
      'Neuquén',
      'Paraná',
      'Posadas',
      'Rawson',
      'Resistencia',
      'Río Gallegos',
      'San Fernando del Valle de Catamarca',
      'San Juan',
      'San Luis',
      'Santa Fe',
      'Santa Rosa',
      'Santiago del Estero',
      'Ushuaia',
      'Viedma',
      'Villa Allende',
      'Carlos Paz'
    ].sort();

    this.opcionesDePago = [
      {value: "efectivo", option: "Efectivo"},
      {value: "credito", option: "Credito"},
      {value: "debito", option: "Debito"}
    ]

    this.opcionDePagoSeleccionada = "efectivo";
  }

  ngOnInit(): void {
    this.formularioDireccion = this._fb.group({
      selectCiudad : ['', [Validators.required]],
      numero       : ['', [Validators.required, Validators.min(0)]],
      calle        : ['', [Validators.required]],
      referencias  : ['', []]
    })
  }
  
  checkOp(){
    console.log(this.opcionDePagoSeleccionada)
  }
  
}
