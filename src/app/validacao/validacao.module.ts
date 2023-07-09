import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidacaoPageRoutingModule } from './validacao-routing.module';

import { ValidacaoPage } from './validacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidacaoPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ValidacaoPage]
})
export class ValidacaoPageModule {}
