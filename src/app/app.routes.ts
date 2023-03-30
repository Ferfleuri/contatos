import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'lana',
    loadComponent: () => import('./lana/lana.page').then( m => m.LanaPage)
  },
  {
    path: 'weeknd',
    loadComponent: () => import('./weeknd/weeknd.page').then( m => m.WeekndPage)
  },
  {
    path: 'melanie',
    loadComponent: () => import('./melanie/melanie.page').then( m => m.MelaniePage)
  },
  {
    path: 'gaga',
    loadComponent: () => import('./gaga/gaga.page').then( m => m.GagaPage)
  },
  {
    path: 'lulu',
    loadComponent: () => import('./lulu/lulu.page').then( m => m.LuluPage)
  },
  {
    path: 'jao',
    loadComponent: () => import('./jao/jao.page').then( m => m.JaoPage)
  },
];
