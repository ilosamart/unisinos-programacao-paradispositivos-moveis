import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tabCadastroPage } from './tabCadastro.page';

const routes: Routes = [
  {
    path: '',
    component: tabCadastroPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tabCadastroPageRoutingModule {}
