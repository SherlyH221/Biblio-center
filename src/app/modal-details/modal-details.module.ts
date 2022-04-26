import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDetailsPageRoutingModule } from './modal-details-routing.module';

import { ModalDetailsPage } from './modal-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDetailsPageRoutingModule
  ],
  declarations: [ModalDetailsPage]
})
export class ModalDetailsPageModule {}
