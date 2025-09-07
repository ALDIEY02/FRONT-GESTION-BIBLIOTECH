import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GestionUsersComponent } from './pages/gestion-users/gestion-users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'utilisateurs',
    component: GestionUsersComponent,
  },
  {
    path: 'gestion-users/user-create',
    component: AddUserComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
