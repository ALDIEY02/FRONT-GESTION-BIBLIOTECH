import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { GestionRvComponent } from './pages/gestion-rv/gestion-rv.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  
  {
    path: 'gestion-rv',
    component: GestionRvComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecteurRoutingModule {}
