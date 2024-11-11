import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'home-inicio',
    loadChildren: () => import('./home-inicio/home-inicio.module').then( m => m.HomeInicioPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'autos',
    loadChildren: () => import('./autos/autos.module').then( m => m.AutosPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'recupera-contra',
    loadChildren: () => import('./recupera-contra/recupera-contra.module').then( m => m.RecuperaContraPageModule)
  },
  {
    path: 'listar-autos',
    loadChildren: () => import('./listar-autos/listar-autos.module').then( m => m.ListarAutosPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'pasajeros',
    loadChildren: () => import('./pasajeros/pasajeros.module').then( m => m.PasajerosPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'conductores',
    loadChildren: () => import('./conductores/conductores.module').then( m => m.ConductoresPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'lista-viaje',
    loadChildren: () => import('./lista-viaje/lista-viaje.module').then( m => m.ListaViajePageModule),
    canActivate:[authGuard]
  },
  {
    path: 'viaje',
    loadChildren: () => import('./viaje/viaje.module').then( m => m.ViajePageModule),
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
