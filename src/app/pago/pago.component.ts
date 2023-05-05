import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select } from '../interfaces/select.interface';
import { EfectivoComponent } from '../efectivo/efectivo.component';
import { TarjetaDeCreditoComponent } from '../tarjeta-de-credito/tarjeta-de-credito.component';
import { FormularioAccesible } from '../interfaces/formularioAccesible.interface';
import { TarjetaDeDebitoComponent } from '../tarjeta-de-debito/tarjeta-de-debito.component';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit{
  public ciudades: string[];
  public formularioDireccion!: FormGroup;
  public componenteCargado: any = TarjetaDeDebitoComponent;

  constructor(private _fb: FormBuilder, private resolver: ComponentFactoryResolver){
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



  }

  ngOnInit(): void {
    this.formularioDireccion = this._fb.group({
      selectCiudad : ['', [Validators.required]],
      numero       : ['', [Validators.required, Validators.min(0)]],
      calle        : ['', [Validators.required]],
      referencias  : ['', []],
      opcionEnvioSeleccionada : [ 'Lo antes posible', [Validators.required]],
      fechaHora    : ['', [ this.checkearFechaHoraValida]]
      //fecha        : ['', [this.checkearFechaValida]],
      //hora         : ['', [this.checkearHoraValida]] 
    })
  }

  public checkearFechaHoraValida = (control: FormControl) => {

    if (!this.formularioDireccion) {
      return;
    }

    const fechaHoraInput = new Date(control.value);
  
    // Obtener la fecha y hora actual
    const fechaHoraActual = new Date();
  
    // Obtener el valor de la opción de envío seleccionada
    const opcionEnvioSeleccionada = this.formularioDireccion.get('opcionEnvioSeleccionada')?.value;
  
    // Comparar las fechas y horas
    if (((fechaHoraInput > fechaHoraActual) && opcionEnvioSeleccionada == "fecha") || opcionEnvioSeleccionada == "Lo antes posible") {
      return null;
    } else if( opcionEnvioSeleccionada == "Lo antes posible" ){
      return null;
    } else if( ((fechaHoraInput < fechaHoraActual || fechaHoraInput === null) && opcionEnvioSeleccionada == "Lo antes posible")){
      return null
    }

    return {
      fechaHoraInvalida: true
    };
  }


  public checkearHoraValida( control : FormControl ){
    // Obtener el valor del input
    const horaIngresada = control.value;
    
    // Crear un objeto de fecha con la hora ingresada por el usuario
    const horaIngresadaDate = new Date(`2000-01-01T${horaIngresada}`);
    
    // Crear un objeto de fecha con la hora actual
    const horaActual = new Date();
    
    // Comparar las horas
    if (horaIngresadaDate.getHours() < horaActual.getHours() ||
        (horaIngresadaDate.getHours() === horaActual.getHours() && horaIngresadaDate.getMinutes() < horaActual.getMinutes())) {
      return {
        horaInvalida: true
      }
    } else {
      return null;
    }
  }
  

  checkOp(){
    console.log(this.formularioDireccion.controls['opcionEnvioSeleccionada'].value)
  }

  checkErrors(){
    console.log(this.formularioDireccion.controls['selectCiudad'].errors)
    console.log(this.formularioDireccion.controls['numero'].errors)
    console.log(this.formularioDireccion.controls['calle'].errors)
    console.log(this.formularioDireccion.controls['referencias'].errors)
    console.log(this.formularioDireccion.controls['fechaHora'].errors)
  }
  
}
