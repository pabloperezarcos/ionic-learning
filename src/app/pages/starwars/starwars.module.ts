import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarwarsPageRoutingModule } from './starwars-routing.module';

import { StarwarsPage } from './starwars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarwarsPageRoutingModule
  ],
  declarations: [StarwarsPage]
})
export class StarwarsPageModule {}
