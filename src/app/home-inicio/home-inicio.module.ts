import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeInicioPageRoutingModule } from './home-inicio-routing.module';

import { HomeInicioPage } from './home-inicio.page';
import { HomeComponent } from '../components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeInicioPageRoutingModule
  ],
  declarations: [HomeInicioPage, HomeComponent]
})
export class HomeInicioPageModule {}
