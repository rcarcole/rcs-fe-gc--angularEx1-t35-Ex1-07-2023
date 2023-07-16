import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientecomponentComponent } from './clientecomponent/clientecomponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListadocomponentComponent } from './listadocomponent/listadocomponent.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientecomponentComponent,
    ListadocomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
