import { Component } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientecomponent',
  templateUrl: './clientecomponent.component.html',
  styleUrls: ['./clientecomponent.component.css']
})

export class ClientecomponentComponent {
  constructor(private clientesService: ClientesService) { }
  nombre: string = '';
  cif: string = '';
  direccion: string = '';
  grupo: string = '';

  guardarCliente() {
    let cliente = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo
    };

    this.clientesService.agregarCliente(cliente);
    this.reset();
  }

  reset(){
    this.nombre = '';
    this.cif = '';
    this.direccion = '';
    this.grupo = '';
  };
}