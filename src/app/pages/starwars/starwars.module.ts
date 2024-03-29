import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarwarsPageRoutingModule } from './starwars-routing.module';

import { StarwarsPage } from './starwars.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarwarsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StarwarsPage]
})
export class StarwarsPageModule {}
