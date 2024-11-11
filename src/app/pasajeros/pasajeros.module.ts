import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasajerosPageRoutingModule } from './pasajeros-routing.module';

import { PasajerosPage } from './pasajeros.page';
import { PasajeroComponent } from '../components/pasajero/pasajero.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasajerosPageRoutingModule
  ],
  declarations: [PasajerosPage,PasajeroComponent]
})
export class PasajerosPageModule {}
