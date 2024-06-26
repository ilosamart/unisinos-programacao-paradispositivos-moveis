import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabsRouter.page';
import { DadosService } from '../service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabInicio',
        loadChildren: () => import('../tabInicio/tabInicio.module').then(m => m.tabInicioPageModule)
      },
      {
        path: 'tabCadastro',
        loadChildren: () => import('../tabCadastro/tabCadastro.module').then(m =>  m.tabCadastroPageModule)
      },
      {
        path: 'tabContatosRecebidos',
        loadChildren: () => import('../tabContatosRecebidos/tabContatosRecebidos.module').then(m => m.tabContatosRecebidosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tabInicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabInicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
