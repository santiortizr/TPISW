export class Producto {
    private _id: number;
    private _nombre: string;
    private _precio: number;
    private _tipo: string;

    constructor(id: number ,nombre: string, precio: number, tipo: string){
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
        this._tipo = tipo;
    }

    public getId(): number{
        return this._id
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