import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductoresPageRoutingModule } from './conductores-routing.module';

import { ConductoresPage } from './conductores.page';
import { ConductorComponent } from '../components/conductor/conductor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductoresPageRoutingModule
  ],
  declarations: [ConductoresPage,ConductorComponent]
})
export class ConductoresPageModule {}
