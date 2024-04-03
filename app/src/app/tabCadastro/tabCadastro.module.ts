import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tabCadastroPage } from './tabCadastro.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tabCadastroPageRoutingModule } from './tabCadastro-routing.module';
import { DadosService } from '../service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    tabCadastroPageRoutingModule
  ],
  declarations: [tabCadastroPage]
})
export class tabCadastroPageModule {}
