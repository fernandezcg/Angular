import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { TareasComponent } from './tareas/tareas.component';
// import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  // { path: 'tareas', component: TareasComponent }, // cambiamos a carga perezosa
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasModule' },
  // { path: 'about', component: AboutComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
