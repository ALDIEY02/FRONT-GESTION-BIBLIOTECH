import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./pages/home/home.component";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GestionUsersComponent } from './pages/gestion-users/gestion-users.component';
import { AdminRoutingModule } from './admin.routes';
import { AddUserComponent } from './pages/add-user/add-user.component';


@NgModule({
  declarations: [HomeComponent,GestionUsersComponent,AddUserComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    AdminRoutingModule,
    NgxPaginationModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
