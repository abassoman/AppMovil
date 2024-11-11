import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarAutosPageRoutingModule } from './listar-autos-routing.module';

import { ListarAutosPage } from './listar-autos.page';
import { ListaAutosComponent } from '../components/lista-autos/lista-autos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarAutosPageRoutingModule
  ],
  declarations: [ListarAutosPage, ListaAutosComponent]
})
export class ListarAutosPageModule {}
