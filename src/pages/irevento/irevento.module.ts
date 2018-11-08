import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IreventoPage } from './irevento';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    IreventoPage,
  ],
  imports: [
    IonicPageModule.forChild(IreventoPage),
    ComponentsModule,
    

  ],
})
export class IreventoPageModule {}
