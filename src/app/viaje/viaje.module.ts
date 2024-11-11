import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajePageRoutingModule } from './viaje-routing.module';

import { ViajePage } from './viaje.page';
import { ViajesComponent } from '../components/viajes/viajes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajePageRoutingModule
  ],
  declarations: [ViajePage,ViajesComponent]
})
export class ViajePageModule {}
