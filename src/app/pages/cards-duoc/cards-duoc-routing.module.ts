import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsDuocPage } from './cards-duoc.page';

const routes: Routes = [
  {
    path: '',
    component: CardsDuocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsDuocPageRoutingModule {}
