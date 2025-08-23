import { Routes } from '@angular/router';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { DashboardLayoutComponent } from '../components/dashboard-layout/dashboard-layout.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    // canActivate: [authGuard],
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import('src/app/modules/admin/admin.module').then((m) => m.AdminModule),
  },
];

export default adminRoutes;