import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tabInicioPage } from './tabInicio.page';

const routes: Routes = [
  {
    path: '',
    component: tabInicioPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tabInicioPageRoutingModule {}
