import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

import { AuthInterceptor } from 'src/app/core/interceptors/auth.interceptor';
import { provideToastr } from 'ngx-toastr';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { Page404Component } from './components/page404/page404.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
//import { SharedModule } from './shared/shared.module';
//import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AddUserComponent } from './modules/admin/pages/add-user/add-user.component';


@NgModule({
  declarations: [
   
    AppComponent,
    NotificationsComponent,
    AuthLayoutComponent,
    SplashScreenComponent,
    HeaderComponent,
    DashboardLayoutComponent,
    Page404Component,
   UserCardComponent,
   NavBarComponent,
   
  ],
  imports: [
    CommonModule,
    ToastrModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
