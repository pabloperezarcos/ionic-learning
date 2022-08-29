import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarwarsPage } from './starwars.page';

const routes: Routes = [
  {
    path: '',
    component: StarwarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarwarsPageRoutingModule {}
