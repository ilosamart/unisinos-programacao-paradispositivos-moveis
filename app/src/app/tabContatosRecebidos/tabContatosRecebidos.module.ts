import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tabContatosRecebidosPage } from './tabContatosRecebidos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tabContatosRecebidosPageRoutingModule } from './tabContatosRecebidos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    tabContatosRecebidosPageRoutingModule
  ],
  declarations: [tabContatosRecebidosPage]
})
export class tabContatosRecebidosPageModule {}
