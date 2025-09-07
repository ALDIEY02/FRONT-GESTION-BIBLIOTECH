import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data/services/auth/auth.service';
import {
  faHome,
  faBook,
  faUser,
  faUsers,
  faCalendarCheck,
  faSignOut,
  faSearch,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  links: { label: string; path: string; icon: any }[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const role = this.authService.user?.role.role as 'admin' | 'lecteur';

    const roleBasedLinks = {
      admin: [
        { label: 'Dashboard', path: '/admin', icon: faHome },
        { label: 'Livres', path: '/admin/livres', icon: faBook },
        { label: 'Auteurs', path: '/admin/auteurs', icon: faUser },
        { label: 'Utilisateurs', path: '/admin/utilisateurs', icon: faUsers },
        { label: 'Emprunts', path: '/admin/emprunts', icon: faCalendarCheck },
        { label: 'Notifications', path: '/admin/notifications', icon: faBell },
      ],
      lecteur: [
        { label: 'Accueil', path: '/lecteur', icon: faHome },
        { label: 'Catalogue', path: '/lecteur/livres', icon: faSearch },
        {
          label: 'Mes emprunts',
          path: '/lecteur/emprunts',
          icon: faCalendarCheck,
        },
      ],
    };

    if (role && roleBasedLinks[role]) {
      this.links = [
        ...roleBasedLinks[role],
        { label: 'Déconnexion', path: '/auth/logout', icon: faSignOut },
      ];
    }
  }
}
