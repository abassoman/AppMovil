import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaViajePageRoutingModule } from './lista-viaje-routing.module';

import { ListaViajePage } from './lista-viaje.page';
import { ListaViajesComponent } from '../components/lista-viajes/lista-viajes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaViajePageRoutingModule
  ],
  declarations: [ListaViajePage,ListaViajesComponent]
})
export class ListaViajePageModule {}
