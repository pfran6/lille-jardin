import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'parc/view/:id',
    loadChildren: () => import('./parc/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'all-parcs',
    loadChildren: () => import('./all-parcs/all-parcs.module').then( m => m.AllParcsPageModule)
  },
  {
    path: 'quartier',
    loadChildren: () => import('./quartier/quartier.module').then( m => m.QuartierPageModule)
  },
  {
    path: 'type',
    loadChildren: () => import('./type/type.module').then( m => m.TypePageModule)
  },
  {
    path: 'parcsearch/:param',
    loadChildren: () => import('./parcsearch/parcsearch.module').then( m => m.ParcsearchPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
