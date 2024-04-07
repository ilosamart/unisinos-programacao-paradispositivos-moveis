import { Routes } from '@angular/router';
import { TabsPage } from './tabsRouter.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabInicio',
        loadComponent: () =>
          import('../tabInicio/tabInicio.page').then((m) => m.tabInicioPage),
      },
      {
        path: 'tabCadastro',
        loadComponent: () =>
          import('../tabCadastro/tabCadastro.page').then((m) => m.tabCadastroPage),
      },
      {
        path: 'tabContatosRecebidos',
        loadComponent: () =>
          import('../tabContatosRecebidos/tabContatosRecebidos.page').then((m) => m.tabContatosRecebidosPage),
      }, 
  
      {
        path: '',
        redirectTo: '/tabInicio/tabInicio.page',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabInicio/tabInicio.page',
    pathMatch: 'full',
  },
];
