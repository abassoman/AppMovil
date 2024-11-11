import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaContraPageRoutingModule } from './recupera-contra-routing.module';

import { RecuperaContraPage } from './recupera-contra.page';
import { ResetPasswordComponent } from '../components/reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaContraPageRoutingModule
  ],
  declarations: [RecuperaContraPage,ResetPasswordComponent]
})
export class RecuperaContraPageModule {}
