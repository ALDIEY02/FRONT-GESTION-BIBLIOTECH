import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './pages/logout/logout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { ToastrModule } from 'ngx-toastr';  // Assurez-vous que ngx-toastr est correctement installé
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ErrorStateMatcher} from '@angular/material/core';
import { RegisterComponent } from './pages/register/register.component';
@NgModule({
  declarations: [LoginComponent, LogoutComponent,RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule,
    
  //  ToastrModule.forRoot(),  // Ajoutez .forRoot() avec éventuellement des options de configuration
  ],
})
export class AuthModule { }
