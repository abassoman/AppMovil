import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutosPageRoutingModule } from './autos-routing.module';

import { AutosPage } from './autos.page';
import { CarsComponent } from '../components/cars/cars.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutosPageRoutingModule
  ],
  declarations: [AutosPage,CarsComponent]
})
export class AutosPageModule {}
