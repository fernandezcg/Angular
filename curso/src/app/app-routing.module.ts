import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TareasComponent } from './tareas/tareas.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'about', component: AboutComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
