import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {HomempPage } from './homemp';

@NgModule({
  declarations: [
    HomempPage,
  ],
  imports: [
    IonicPageModule.forChild(HomempPage),
  ],
})
export class HomempPageModule {}