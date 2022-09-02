import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsDuocPageRoutingModule } from './cards-duoc-routing.module';

import { CardsDuocPage } from './cards-duoc.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsDuocPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CardsDuocPage]
})
export class CardsDuocPageModule {}
