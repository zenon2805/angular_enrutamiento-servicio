import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos: any[] = [];

  agregarAlCarrito(producto: any) {
    this.productos.push(producto);
  }

  obtenerCantidadEnCarrito() {
    return this.productos.length;
  }
  
}
