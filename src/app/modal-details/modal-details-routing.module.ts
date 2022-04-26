import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDetailsPage } from './modal-details.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDetailsPageRoutingModule {}
