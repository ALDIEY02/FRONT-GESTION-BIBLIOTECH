import { Routes } from '@angular/router';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { AuthLayoutComponent } from 'src/app/components/auth-layout/auth-layout.component';

const authRoutes: Routes = [
  {
    path: 'auth',
    canActivate: [authGuard],
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('src/app/modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

export default authRoutes;