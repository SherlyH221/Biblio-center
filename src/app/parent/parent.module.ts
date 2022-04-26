import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentPageRoutingModule } from './parent-routing.module';

import { ParentPage } from './parent.page';
import { HomePageModule } from '../home/home.module';
import { MyCoursesPage } from '../my-courses/my-courses.page';
import { ListComponent } from './list/list.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { OneitemlistComponent } from './oneitemlist/oneitemlist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentPageRoutingModule
  ],
  declarations: [ParentPage,ListComponent,MycoursesComponent,OneitemlistComponent]
})
export class ParentPageModule {}
