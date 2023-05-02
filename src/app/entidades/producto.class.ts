export class Producto {
    private _nombre: string;
    private _precio: number;
    private _tipo: string;

    constructor(nombre: string, precio: number, tipo: string){
        this._nombre = nombre;
        this._precio = precio;
        this._tipo = tipo;
    }

    public getNombre(): string{
        return this._nombre
    }

    public getPrecio(): number{
        return this._precio
    }

    public getTipo(): string{
        return this._tipo
    }

    
}