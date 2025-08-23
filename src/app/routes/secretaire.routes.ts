import { Routes } from '@angular/router';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { DashboardLayoutComponent } from '../components/dashboard-layout/dashboard-layout.component';

const secretaireRoutes: Routes = [
  {
    path: 'secretaire',
    // canActivate: [authGuard],
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import('src/app/modules/secretaire/secretaire.module').then((m) => m.SecretaireModule),
  },
];

export default secretaireRoutes;