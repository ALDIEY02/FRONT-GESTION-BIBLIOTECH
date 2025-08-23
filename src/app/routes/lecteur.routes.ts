import { Routes } from '@angular/router';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { DashboardLayoutComponent } from '../components/dashboard-layout/dashboard-layout.component';

const LecteurRoutes: Routes = [
  {
    path: 'lecteur',
    // canActivate: [authGuard],
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import('src/app/modules/lecteur/lecteur.module').then((m) => m.LecteurModule),
  },
];

export default LecteurRoutes;