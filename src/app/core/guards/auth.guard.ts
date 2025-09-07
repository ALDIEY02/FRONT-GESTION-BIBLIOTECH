import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/data/services/auth/auth.service';
import { map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const publicRoutes = ['/auth/login'];
  const user = authService.user;

  // Si l'utilisateur est connecté
  if (user) {
    const role = user.role?.role ?? '';
    const expectedRoute = getRoute(role, state.url);

    if (state.url === '/auth/logout' || state.url === '/notifications') return true;

    if (publicRoutes.includes(state.url)) {
      router.navigate([expectedRoute]);
      return false;
    }

    if (expectedRoute !== state.url) router.navigate([expectedRoute]);

    return true;
  }

  // Si non connecté
  if (publicRoutes.includes(state.url)) return true;

  router.navigate(['/auth/login']);
  return false;
};

// 🔁 Route par rôle
function getRoute(role: string, url: string): string {
  switch (role) {
    case 'admin':
      return url.startsWith('/admin') ? url : '/admin';
    case 'secretaire':
      return url.startsWith('/secretaire') ? url : '/secretaire';
    case 'lecteur':
      return url.startsWith('/lecteur') ? url : '/lecteur';
    default:
      return '/404';
  }
}
