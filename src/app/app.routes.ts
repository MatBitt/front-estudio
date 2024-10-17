import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'carrinho',
    loadComponent: () =>
      import('./pages/carrinho/carrinho.component').then(
        (c) => c.CarrinhoComponent
      ),
  },
  {
    path: 'perguntas-frequentes',
    loadComponent: () =>
      import('./pages/perguntas/perguntas.component').then(
        (c) => c.PerguntasComponent
      ),
  },
];
