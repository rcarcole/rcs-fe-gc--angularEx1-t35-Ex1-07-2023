import { Component } from '@angular/core';
import { ClientesService } from '../clientes.service';


@Component({
  selector: 'app-listadocomponent',
  templateUrl: './listadocomponent.component.html',
  styleUrls: ['./listadocomponent.component.css']
})
export class ListadocomponentComponent {
  clientes: any[] = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientes = this.clientesService.obtenerClientes();
  }
}
