import { FormControl } from "@angular/forms";

export let validateCreditCard = ( control: FormControl) => {
    let cardNumber = control.value.trim();
    let card = getCardType(cardNumber);

    if(card != "Visa"){
        return {
            tarjetaInvalida: true
        }
    }

    return null;
    
}

export let validateDebitCard = ( control: FormControl ) => {
    let cardNumber = control.value.trim();
    let card = getCardType(cardNumber);

    if(card != "Visa Debit"){
        return {
            tarjetaInvalida: true
        }
    }

    return null;
    
}

export let validateDate = ( control: FormControl ) => {
    
    let date: string = control.value.trim();

    if( validarFormato(date) && validarTiempo(date) ){
        return {
            fechaInvalida: true
        }
    }

    return null
    
}

let validarFormato = ( fecha: string ):boolean => {
    
    // Expresión regular para validar el formato "mm/aaaa"
    const regexFecha = /^(0[1-9]|1[0-2])\/\d{4}$/;
    
    // Validar la fecha utilizando la expresión regular y el método test()
    if (regexFecha.test(fecha)) {
      return true;
    } else {
      return false;
}
}

let validarTiempo = ( date: string ): boolean => {
    // Fecha en formato "mm/aaaa" que deseas comparar

    // Obtener la fecha actual
    const fechaActual = new Date();
    
    // Convertir la fecha actual a una cadena en formato "mm/aaaa"
    const fechaActualString = `${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;
    
    // Convertir la fecha en formato "mm/aaaa" a un objeto Date
    const fechaComparar = new Date(Date.parse(date));
    
    // Comparar las dos fechas
    if (fechaComparar > fechaActual) {
      return true
    } else {
      return false
    }
}

function getCardType(cardNumber:string): string {
    // Eliminar los espacios en blanco y guiones del número de tarjeta
    cardNumber = cardNumber.replace(/[\s-]/g, '');
    
    // Verificar si el número de tarjeta corresponde a una tarjeta de crédito
    if (/^5[1-5]/.test(cardNumber) && cardNumber.length === 16) {
      return "Mastercard";
    } else if (/^4/.test(cardNumber) && (cardNumber.length === 13 || cardNumber.length === 16)) {
      return "Visa";
    } else if (/^3[47]/.test(cardNumber) && cardNumber.length === 15) {
      return "American Express";
    } else if (/^(6011|622|64[4-9]|65)/.test(cardNumber) && cardNumber.length === 16) {
      return "Discover";
    }
    
    // Verificar si el número de tarjeta corresponde a una tarjeta de débito
    if (/^4/.test(cardNumber) && cardNumber.length === 13) {
      return "Visa Debit";
    } else if (/^5[1-5]/.test(cardNumber) && cardNumber.length === 16) {
      return "Mastercard Debit";
    } else if (/^3[47]/.test(cardNumber) && cardNumber.length === 15) {
      return "American Express Debit";
    }
    
    return "Unknown";
  }