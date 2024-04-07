import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tabContatosRecebidosPage } from './tabContatosRecebidos.page';

const routes: Routes = [
  {
    path: '',
    component: tabContatosRecebidosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tabContatosRecebidosPageRoutingModule {}
