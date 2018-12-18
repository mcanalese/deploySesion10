import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppCustomPreloader } from './app.routing.loader';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: { preload: true }
  },
  {
    path: 'catalogo',
    loadChildren: './catalogo/catalogo.module#CatalogoModule'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
