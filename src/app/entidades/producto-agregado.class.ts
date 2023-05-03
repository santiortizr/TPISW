import { Producto } from "./producto.class";

export class ProductoAgregado {
    private _producto: Producto;
    private _cantidad: number;
    private _observaciones: string;

    constructor(prod: Producto, cant: number, esp: string){
        this._producto = prod;
        this._cantidad = cant;
        this._observaciones = esp;
    }

    public getProducto(): Producto {
        return this._producto;
    }

    public getCantidad(): number {
        return this._cantidad;
    }

    public getEspecificaciones(): string {
        return this._observaciones;
    }

    public setCantidad( cant:number ): void {
        this._cantidad = cant;
    }

    public setEspecificaciones( esp:string ): void {
        this._observaciones = esp;
    }

    public equals( prodB:ProductoAgregado ){
        return this._producto.equals(prodB.getProducto())
    }
    
    public getIdProducto(): number{
        return this._producto.getId();  
    }
}