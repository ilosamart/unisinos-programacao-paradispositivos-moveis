import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tabInicioPage } from './tabInicio.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tabInicioPageRoutingModule } from './tabInicio-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    tabInicioPageRoutingModule
  ],
  declarations: [tabInicioPage]
})
export class tabInicioPageModule {}
