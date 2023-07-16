import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientes: any[] = [];

  constructor() { }

  agregarCliente(cliente: any) {
    this.clientes.push(cliente);
    console.log(this.clientes);
  }

  obtenerClientes() {
    return this.clientes;
  }
}
